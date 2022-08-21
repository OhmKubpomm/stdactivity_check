import React from 'react'
import { Button,Card, Grid, Text,Input,Row,Link,Spacer,useTheme } from '@nextui-org/react';

const some = () => {

	return  <form method="post">
  
		
    <Text size={30}>ยินดีต้อนรับเข้าสู่ระบบเว็บเช็คกิจกรรมนักศึกษา</Text>
    <br></br>
		<Card
	isHoverable variant="bordered" 
	css={{ mw: "400px" }}
  align="center"
  >
    <Card.Header>
   
    </Card.Header>
	<Card.Body>
	<Input
          rounded
          bordered
          label="ชื่อผู้ใช้งาน"
          placeholder="กรุณากรอกชื่อผู้ใช้งาน"
          color="primary"
		  type="text"
        />
		<br></br>
		<Input
          rounded
          bordered
          label="รหัสผ่าน"
          placeholder="กรุณากรอกรหัสผ่าน"
          color="primary"
		  type="password"
        />
	</Card.Body>
  <Card.Footer>
            <Row justify="flex-end">
          
  
              <Button size="sm" shadow color="primary" auto rounded animated>
                เข้าสู่ระบบ
              </Button>
              </Row>
              <Spacer />
             

		
              <Button
                textTransform='uppercase'
                w='100%'
               size="sm" shadow color="secondary" auto rounded animated> 
               <Link href="./user/user_regis">
                สมัครสมาชิก
                </Link>
              </Button>
             
          </Card.Footer>
          
  </Card>
  </form>

  ;
}

export default some
