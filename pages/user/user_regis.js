/* eslint-disable @next/next/link-passhref */
import React from 'react'
import { Input,Card,Text,Row,Button} from "@nextui-org/react";
import Link from 'next/link';
import { SimpleGrid,Box } from '@chakra-ui/react'
import {useMediaQuery} from '../useMediaQuery.js'


  
const regis = () => {
  
    return <SimpleGrid minChildWidth='520px' autoRows autoColumns>
      <Card css={{ mw: "500px" }} shadow >
    <Card.Header>
            <Text h3>สมัครสมาชิก</Text>
          </Card.Header>
          <Card.Divider />

    <Card.Body>
    <form>
          <Box w={[300, 400, 500]} >
          <Input 
      clearable
      type="test"
      label="ชื่อผู้ใช้งาน"
      placeholder="กรุณากรอกชื่อผู้ใช้งาน"
        />
  </Box>
  <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="รหัสนักศึกษา" 
          type="text" 
          placeholder="กรุณากรอกรหัสนักศึกษา"
        />
   </Box>
   <Box w={[300, 400, 500]}>
      <Input.Password
          clearable
          initialValue="123456789"
          type="password"
          label="รหัสผ่าน"
          placeholder="กรุณากรอกรหัสผ่าน"
        />
     </Box>
     <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="ชื่อ-นามสกุล" 
          type="text" 
          placeholder="กรุณาชื่อ-นามสกุล"
        />
         </Box>
         <Box w={[300, 400, 500]}>
        <Input 
          label="วัน/เดือน/ปีเกิด" 
          type="date" 
          placeholder="กรุณากรอกวัน/เดือน/ปีเกิด"
        />
       </Box>
         <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="สาขาวิชา" 
          type="text" 
          placeholder="กรุณากรอกสาขาวิชา"
        />
         </Box>

         <Box w={[300, 400, 500]}>
        <Input 
        clearable
          label="แผนก" 
          type="text" 
          placeholder="กรุณากรอกแผนก"
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
             

          
              <Button size="sm" shadow color="gradient" auto >
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
