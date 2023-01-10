import { useState } from 'react';
import { Button,Card,Text,Input,Row,Link,Spacer } from '@nextui-org/react';
import  Router from 'next/router';
import { signIn} from 'next-auth/react';


const some = ({ csrfToken, providers}) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username,setUsername] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password,setPassword] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message,setMessage] = useState(null);
  
  const signinUser = async(e) => {
      e.preventDefault();
      let options = {redirect:false,username,password}
      const res = await signIn ("credentials",options)
      setMessage(null)
      if (res?.error) {
        setMessage(res.error)
      }
      
    return Router.push("/");
    }
    
    

  
	return   <><form action="">
    <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
    <br></br>
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
        <br></br>
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
          <p style={{color:'red'}}>{message}</p>
          <Button size="sm" color="primary" auto rounded animated onClick={(e) => signinUser(e)}>
            เข้าสู่ระบบ
          </Button>
        </Row>
        
           


      </Card.Footer>

    </Card>
  </form></>


}

export default some
