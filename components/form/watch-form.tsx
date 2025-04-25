import { Field, Form, Formik } from 'formik';
import { useRouter} from 'next/navigation';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button
  } from '@chakra-ui/react'

  const WatchForm: React.FC = () => {
    const router = useRouter()
    function validateName(value) {
      let error
      if (!value) {
        error = 'StreamId is required'
      }
      return error
    }

    const handleWatchAction = (streamId) =>{
        //let url =  window.location.href + '/livestream/'+streamId
        router.push('/livestream/'+streamId, undefined)
    }
  
    return (
      <Formik
         initialValues={{ name: null }}
        onSubmit={(values, actions) => {
            handleWatchAction(values.name)
/*           setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000) */
        }}
      >
        {(props) => (
          <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>WATCH ID</FormLabel>
                  <Input {...field} placeholder='Enter watch id' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }

  export default WatchForm