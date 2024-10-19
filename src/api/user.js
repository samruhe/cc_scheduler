export const updateProfile = (profile) => {
  return fetch(`/api/users/updateProfile`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}
