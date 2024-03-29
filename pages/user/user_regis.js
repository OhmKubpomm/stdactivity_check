/* eslint-disable react-hooks/rules-of-hooks */

import { Input,Card,Text,Row,Button} from "@nextui-org/react";
import Link from 'next/link';
import { SimpleGrid,Box,Alert,Flex, FormControl} from '@chakra-ui/react'
import { useQueryClient,useMutation } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router'
const regis = () => {
  const [studentid, setStudentId] = useState('')
  const [studentname, setStudentName] = useState('')
  const [studentdate, setStudentDate] = useState('')
  const [studentdepartment, setStudentDepartment] = useState('')
  const [studentfield, setStudentField] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const Router = useRouter()
  const showAlert = () => {
    alert('Submit Successfully');
    Router.push('/')
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const data = { studentid, studentname, studentdate, studentdepartment, studentfield, username, password }
    // use axios to send data to server to save data to database 
    try {
      await axios.post('/api/users', data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClear = () => {
    setStudentId('')
    setStudentName('')
    setStudentDate('')
    setStudentDepartment('')
    setStudentField('')
    setUsername('')
    setPassword('')
  }

  const handleReturn = () => {
  // logic to redirect back to homepage
Router.push('/') // assuming you have set up routing using next/router package
}



    

  

    return <Flex justifyContent="center">
      
    <FormControl w={[300, 400, 500]} >
   
      <Card css={{ mw: "500px" }} shadow="true" >
    <Card.Header>
            <Text h3>สมัครสมาชิก</Text>
          </Card.Header>
          <Card.Divider />

    <Card.Body>
    <form onSubmit={handleSubmit}>
          <Box w={[300, 400, 500]} >
          <Input 
      clearable
      type="text"
      label="ชื่อผู้ใช้งาน"
      placeholder="กรุณากรอกชื่อผู้ใช้งาน"
      onChange={event => setUsername(event.target.value)}
      value={username}
        />
  </Box>
  <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="รหัสนักศึกษา" 
          type="number" 
          placeholder="กรุณากรอกรหัสนักศึกษา"
          onChange={event => setStudentId(event.target.value)}
          value={studentid}
        />
   </Box>
   <Box w={[300, 400, 500]}>
      <Input.Password
          clearable
          initialValue="123456789"
          type="password"
          label="รหัสผ่าน"
          placeholder="กรุณากรอกรหัสผ่าน"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
     </Box>
     <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="ชื่อ-นามสกุล" 
          type="text" 
          placeholder="กรุณาชื่อ-นามสกุล"
          onChange={event => setStudentName(event.target.value)}
          value={studentname}
        />
         </Box>
         <Box w={[300, 400, 500]}>
        <Input 
          label="วัน/เดือน/ปีเกิด" 
          type="date" 
          placeholder="กรุณากรอกวัน/เดือน/ปีเกิด"
          onChange={event => setStudentDate(event.target.value)}
          value={studentdate}
        />
       </Box>
         <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="สาขาวิชา" 
          type="text" 
          placeholder="กรุณากรอกสาขาวิชา"
          onChange={event => setStudentField(event.target.value)}
          value={studentfield}
        />
         </Box>

         <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="แผนก" 
          type="text" 
          placeholder="กรุณากรอกแผนก"
          onChange={event => setStudentDepartment(event.target.value)}
          value={studentdepartment}
        />
         </Box>
  
     <Card.Footer>
      
            <Row justify="flex-end">
            
             
            <Button size="sm" onClick={handleReturn} light>
              กลับไปหน้าหลัก
              </Button>
          
     
            
              <Button size="sm" onClick={handleClear} light >
              ล้างข้อมูล
              </Button>
             

          
              <Button size="sm"  color="gradient" type="submit" >
                ยืนยันการสมัครสมาชิก
              </Button>
              
            </Row>
        
          </Card.Footer>
    </form>
   
    </Card.Body>
  </Card>
  </FormControl>
    </Flex>
}
export default regis
