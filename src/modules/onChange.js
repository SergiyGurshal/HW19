export default function onChange(e, type, setState) {
  const valueOfInput = e.target.value
  let nameForm
  switch (type) {
    case 'name':
      nameForm = /...+/
      break
    case 'email':
      nameForm = /...+@..+\...+/
      break
    case 'password':
      nameForm = /(?=.*[a-z])(?=.*[A-Z])......../
      break
    default:
      nameForm = /.*/
  }

  if (nameForm.test(valueOfInput)) {
    e.target.className = e.target.className + ' right'
    setState({ value: valueOfInput, right: true })
  } else {
    e.target.className = e.target.className + ' wrong'
    setState({ value: valueOfInput, right: false })
  }
}
