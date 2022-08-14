import React from 'react'
import { Button,Card, Grid, Text,Input } from '@nextui-org/react';



const some = () => {
	return <form method="post">
		<Text>ยินดีต้อนรับเข้าสู่ระบบเว็บเช็คกิจกรรมนักศึกษา</Text>
		<Card
	isHoverable variant="bordered" 
	css={{ mw: "400px" }}
  >
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
          placeholder="กรุณากรอกชื่อผู้ใช้งาน"
          color="primary"
		  type="password"
        />
	</Card.Body>
  </Card>
  </form>;
}

export default some
