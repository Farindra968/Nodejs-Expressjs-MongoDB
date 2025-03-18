import jwt from 'jsonwebtoken'
const jsonToken = (data) => {
  return jwt.sign(data, "my-secret-token-key")
}

export default jsonToken
