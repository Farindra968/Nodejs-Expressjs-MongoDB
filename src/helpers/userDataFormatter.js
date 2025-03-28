
const userDataFormatter = (data) => {
    return {
        id: data._id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        profileImageUrl: data.profileImageUrl,
        role: data.role,
        address: data.address
  }
}

export default userDataFormatter
