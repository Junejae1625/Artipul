import { useMutation, useQuery } from '@apollo/client'
import Router, { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { successModal, warningModal } from '../../commons/Modal'
import {
  CHECK_NICKNAME,
  PHONE_AUTH,
  SEND_PHONE_TOKEN
} from '../createUser/CreateUser.Queries'
import SocialLoginPresenter from './SocialLogin.Presenter'
import { FIND_SOCIAL_USER, UPDATE_SOCIAL_USER } from './SocialLogin.Queries'

export default function SocialLoginContainer() {
  const router = useRouter()

  const [sendPhoneToken] = useMutation(SEND_PHONE_TOKEN)
  const [phoneAuth] = useMutation(PHONE_AUTH)
  const [checkNickname] = useMutation(CHECK_NICKNAME)
  const [updateSocialUser] = useMutation(UPDATE_SOCIAL_USER)
  const { data: social } = useQuery(FIND_SOCIAL_USER)

  const [phoneNum, setPhoneNum] = useState('')
  const [token, setToken] = useState('')
  const [isCheckPhoneNum, setIsCheckPhoneNum] = useState(false)
  const [checkPhoneAuth, setCheckPhoneAuth] = useState(false)
  const [nickname, setNickname] = useState('')
  const [nicknameAuth, setNicknameAuth] = useState(false)
  const [college, setCollege] = useState('')
  const [minSec, setMinSec] = useState(false)
  const [min, setMin] = useState(3)
  const [sec, setSec] = useState(0)
  const time = useRef(179)
  const timerId = useRef(null)

  const onChangePhoneNum = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(event.target.value)
  }
  const onChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value)
  }
  const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }
  const onChangeColleage = (event: ChangeEvent<HTMLInputElement>) => {
    setCollege(event.target.value)
  }
  const onClickPhoneNum = async () => {
    if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(phoneNum)) {
      warningModal('올바른 휴대전화 형식이 아닙니다')
      return
    }

    timerId.current = setInterval(() => {
      setMin(Math.floor(time.current / 60))
      setSec(time.current % 60)
      time.current -= 1
    }, 1000)

    try {
      await sendPhoneToken({
        variables: {
          phoneNum
        }
      })

      setMinSec(true)
      setIsCheckPhoneNum(true)
    } catch (e) {
      warningModal(e.message)
    }
  }

  const onClickPhoneAuth = async () => {
    try {
      const result = await phoneAuth({
        variables: {
          phoneNum,
          token
        }
      })
      if (result.data?.phoneAuth) {
        setCheckPhoneAuth(result.data?.phoneAuth)
        setIsCheckPhoneNum(false)
        setMinSec(false)
        successModal('인증에 성공하셨습니다.')
      } else {
        warningModal('인증번호를 다시 확인해주세요')
      }
    } catch (e) {
      warningModal(e.message)
    }
  }

  const onClickNicknameAuth = async () => {
    if (nickname.length < 2) {
      warningModal('최소 두글자 이상입력해주세요')
      return
    }
    try {
      const result = await checkNickname({
        variables: {
          nickname
        }
      })
      if (result.data?.checkNickname) {
        setNicknameAuth(result.data?.checkNickname)
        successModal('사용가능한 닉네임입니다.')
      }
    } catch (e) {
      warningModal(e.message)
    }
  }
  const onClickUpdateSocialLogin = async () => {
    if (college) {
      try {
        await updateSocialUser({
          variables: {
            updateSocialUser: {
              email: social?.findSocialUser.email,
              phoneNum,
              nickname,
              is_artist: true,
              college
            }
          }
        })
        router.push('/')
      } catch (e) {
        warningModal(e.message)
      }
    } else {
      try {
        await updateSocialUser({
          variables: {
            updateSocialUser: {
              email: social?.findSocialUser.email,
              phoneNum,
              nickname,
              is_artist: false,
              college: ''
            }
          }
        })
        router.push('/')
      } catch (e) {
        warningModal(e.message)
      }
    }
  }

  return (
    <SocialLoginPresenter
      onClickPhoneAuth={onClickPhoneAuth}
      onClickPhoneNum={onClickPhoneNum}
      onClickNicknameAuth={onClickNicknameAuth}
      isCheckPhoneNum={isCheckPhoneNum}
      onChangePhoneNum={onChangePhoneNum}
      onChangeToken={onChangeToken}
      onChangeNickName={onChangeNickName}
      minSec={minSec}
      min={min}
      sec={sec}
      onChangeColleage={onChangeColleage}
      checkPhoneAuth={checkPhoneAuth}
      nicknameAuth={nicknameAuth}
      onClickUpdateSocialLogin={onClickUpdateSocialLogin}
      social={social}
    />
  )
}
