/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { Button,Card,Text,Input,Row,Link,Spacer } from '@nextui-org/react';
import {useRouter} from 'next/router';
import { signIn} from 'next-auth/react';

const some = ({ csrfToken, providers}) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState(null);
  const router = useRouter()
  
 const signinUser = async() => {
    let options = {redirect:false,username,password}
    const res = await signIn ("credentials",options)
    setMessage(null)
    if (res?.error) {
      setMessage(res.error)
    }else{
      router.push("/")
    }
  }

    
	return   <>
    <Card
      isHoverable variant="bordered"
      css={{ mw: "400px" }}
      align="center"
    >
      <Card.Header>
        <Text size={30}>ยินดีต้อนรับเข้าสู่ระบบเว็บเช็คกิจกรรมนักศึกษา</Text>
      </Card.Header>
      <Card.Body>
        <Input
          rounded
          bordered
          label="ชื่อผู้ใช้งาน"
          placeholder="กรุณากรอกชื่อผู้ใช้งาน"
          color="primary"
          type="text"
          id="username" 
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)} />
        <Input
          rounded
          bordered
          label="รหัสผ่าน"
          placeholder="กรุณากรอกรหัสผ่าน"
          color="primary"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
      </Card.Body>
      <Card.Footer>
        <Row justify="flex-end">
          <Link href="./user/user_regis">
            <Button
              w='100%'
              size="sm" color="secondary" auto rounded animated>
               สมัครสมาชิก
  </Button>
</Link>
<Spacer />
<Text size="sm" color="red">{message}</Text>
<Button size="sm" color="primary" auto rounded animated onClick={signinUser}>
  เข้าสู่ระบบ
</Button>
</Row>
</Card.Footer>
</Card>
</>

}

export default some
