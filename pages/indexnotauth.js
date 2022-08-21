import React, { useEffect } from 'react';
import { Button,Card, Grid, Text,Input,Row,Link,Spacer,useTheme } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../database/error';
const some = () => {
 

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { redirect } = router.query;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toast = useToast()
  const {
    handleSubmit,
    register,
    formState: { errors },
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };


	return  <form onSubmit={handleSubmit(submitHandler)}>
   
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
            <Link href="./user/user_regis">
              <Button
                textTransform='uppercase'
                w='100%'
               size="sm"  color="secondary" auto rounded animated> 
                สมัครสมาชิก
              </Button>
              </Link>
              <Spacer />
              <Button size="sm"  color="primary" auto rounded animated onClick={handleSubmit(submitHandler)}>
                เข้าสู่ระบบ
              </Button>
              </Row>
         
             

             
          </Card.Footer>
          
  </Card>
  </form>
}

export default some
