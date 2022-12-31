/* eslint-disable @next/next/link-passhref */
import React,{useState,useEffect,useReducer} from 'react';
import { Input,Card,Text,Row,Button} from "@nextui-org/react";
import Link from 'next/link';
import { SimpleGrid,Box } from '@chakra-ui/react'
import { useQueryClient,useMutation } from 'react-query';
import {addUser} from "../../lib/helper";
import { useSelector } from 'react-redux';

const formReducer=(state,event) =>{
  return{
    ...state,
    [event.target.name]:event.target.value
  }
}


const regis = () => {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData,setFormData]=useReducer(formReducer,{})
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const addMutation=useMutation(addUser,{
    onSuccess:()=>{
      console.log("Data insert");
    }   
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(Object.keys(formData).length == 0 )return console.log("don't have form data");
    let{student_id,student_name,student_date,student_department,student_field,username,password} = formData;

    const model={
      student_id,student_name,student_date,student_department,student_field,username,password
    }
    addMutation.mutate(model)
  }
 

    return <SimpleGrid minChildWidth='520px' autoRows autoColumns>
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
      onChange={setFormData}
      name="username"
        />
  </Box>
  <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="รหัสนักศึกษา" 
          type="text" 
          placeholder="กรุณากรอกรหัสนักศึกษา"
          onChange={setFormData}
          name="student_id"
        />
   </Box>
   <Box w={[300, 400, 500]}>
      <Input.Password
          clearable
          initialValue="123456789"
          type="password"
          label="รหัสผ่าน"
          placeholder="กรุณากรอกรหัสผ่าน"
          onChange={setFormData}
          name="password"
        />
     </Box>
     <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="ชื่อ-นามสกุล" 
          type="text" 
          placeholder="กรุณาชื่อ-นามสกุล"
          onChange={setFormData}
          name="student_name"
        />
         </Box>
         <Box w={[300, 400, 500]}>
        <Input 
          label="วัน/เดือน/ปีเกิด" 
          type="date" 
          placeholder="กรุณากรอกวัน/เดือน/ปีเกิด"
          onChange={setFormData}
          name="student_date"
        />
       </Box>
         <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="สาขาวิชา" 
          type="text" 
          placeholder="กรุณากรอกสาขาวิชา"
          onChange={setFormData}
          name="student_field"
        />
         </Box>

         <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="แผนก" 
          type="text" 
          placeholder="กรุณากรอกแผนก"
          onChange={setFormData}
          name="student_department"
        />
         </Box>
  
     <Card.Footer>
      
            <Row justify="flex-end">
            
              <Link href="/indexnotauth">
            <Button size="sm" light>
              กลับไปหน้าหลัก
              </Button>
              </Link>
     
            
              <Button size="sm" light>
              ล้างข้อมูล
              </Button>
             

          
              <Button size="sm"  color="gradient" type="submit">
                ยืนยันการสมัครสมาชิก
              </Button>
          
            </Row>
        
          </Card.Footer>
    </form>
    </Card.Body>
  </Card>
  </SimpleGrid>
}
export default regis
