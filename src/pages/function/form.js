function FormikExample() {
	function validateName(value) {
	  let error
	  if (!value) {
		error = 'Name is required'
	  } else if (value.toLowerCase() !== 'naruto') {
		error = "Jeez! You're not a fan 😱"
	  }
	  return error
	}
}
return (
    <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    ></Formik>
