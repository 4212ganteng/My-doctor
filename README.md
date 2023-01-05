
<h1 align="center">
-----custom Hook-------
</h1>
# useForm

code in utils useForm.js

```javascript
import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    // Parameter for onchange(get value from name)
    (formName, formValue) => {
      // and set the state
      return setValues({ ...values, [formName]: formValue });
    },
  ];
};
```

# in Register.js

```javascript

<!-- call the custom hook useForm from utils -->
 const [form,setForm]=useForm({
    fullName:"",
    profession:"",
    email:"",
    password:"",
  })

  <!-- handle submit -->
  const handleSubmit = () => {
    console.log("ini data form", form);
  };
```

# and the input code like this

```javascript
 value={form.value}
onChangeText={(value) => setForm("password", value)}

```

<h1 align="center">
----- Firebase -------
</h1>

1. install fire base on project

```javascript
yarn add firebase
<!-- if u using NPM -->
npm install firebase
`
```

2. create folder config and create file for save configurasi from fire base

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "4212ganteng",
  authDomain: "my-doctor-4212ganteng.firebaseapp.com",
  projectId: "my-doctor-4212",
  storageBucket: "my-doctor-4212.appspot.com",
  messagingSenderId: "4212222",
  appId: "1:4212ganteng",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
// exportt biar bisa di gunakan dimna aja
export default fire;
```

# let try to regist with auth email password

on Register.js add code api firebase

````javascript

const handleSubmit = () => {
setLoading(true);
console.log("ini data form", form);
// fire dari config yang kita buat tdi
const auth = getAuth(fire);
createUserWithEmailAndPassword(auth, form.email, form.password)
.then((userCredential) => {

        setLoading(false);
        const user = userCredential.user;
        console.log("success register ", user);
      })
      .catch((error) => {
        setLoading(false);

        const errorMessage = error.message;

      });

};

```
````
