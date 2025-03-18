
const userDataFormatter = (data) => {
    return {
        id: data.id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        role: data.role,
        address: data.address
  }
}

export default userDataFormatter
