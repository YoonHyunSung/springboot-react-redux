import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const userJoinPage = async (x) => {
   const res = await userAPI.userJoin(x)
   return res.data
}
const userDetailPage = async (x) => {
  const res = await userAPI.userDetail(x)
  return res.data
}
const userListPage = async () => {
  const res = await userAPI.userList()
  return res.data
}
const userLoginPage = async (x) => {
  const res = await userAPI.userLogin(x) 
  return res.data
}
const userModifyPage = async (x) => {
  const res = await userAPI.userModify(x)
  return res.data
}
const userRemovePage = async (x) => {
  const res = await userAPI.userRemove(x)
  return res.data
}

export const joinPage = createAsyncThunk('users/join', userJoinPage)
export const detailPage = createAsyncThunk('users/dtail', userDetailPage)
export const listPage = createAsyncThunk('users/list', userListPage)
export const loginPage = createAsyncThunk('users/login', userLoginPage)
export const modifyPage = createAsyncThunk('users/modify', userModifyPage)
export const removePage = createAsyncThunk('users/remove', userRemovePage)

const changeNull = ls =>{
  for(const i of ls ){
    document.getElementById(i).value = ''
  }
}
const userSlice = createSlice({
  name: 'users',
  initialState: {
    userState: {
      userName:'', password:'', email:'', name:'', regDate: ''
    },
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [joinPage.fulfilled]: ( state, action ) => { 
      state.userState = action.payload 
      window.location.href = `/users/login`
    },
    [detailPage.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload},
    [listPage.fulfilled]: ( state, {meta, payload} ) => { 
      state.pageResult = payload
      window.localStorage.getItem('sessionUser', JSON.stringify(payload))
      if(payload != null){
        window.location.href = `/users/list`
      } },
    [loginPage.fulfilled]: ( state, {meta, payload} ) => {
      state.userState = payload
      window.localStorage.setItem('sessionUser', JSON.stringify(payload))
      if(payload.userName != null){
        alert(`${payload.name}??? ???????????????`)
        window.location.href = `/users/detail`
      }else{
        alert('?????????, ?????? ????????? ????????? ??????  ')
        changeNull(['userName','password'])
      }
    },
    [modifyPage.fulfilled]: ( state, action ) => { 
      localStorage.setItem('sessionUser', JSON.stringify(action.payload))
      window.location.href = "/users/detail"
    },
    [removePage.fulfilled]: ( state, {meta, payload }) => { 
      state.userState = payload
      window.localStorage.setItem('sessionUser', '')
    }
  }

})
export const currentUserState = state => state.users.userState
export const currentUserParam = state => state.users.param
export default userSlice.reducer;