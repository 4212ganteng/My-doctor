# -----custom Hook-------

# useForm

code in utils useForm.js

```
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

```
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

```
 value={form.value}
            onChangeText={(value) => setForm("password", value)}

```

# ----- Firebase -------

1. install fire base on project

```
yarn add firebase
<!-- if u using NPM -->
npm install firebase

```

2. create folder config and create file for save configurasi from fire base

```
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "4212ganteng",
  authDomain: "my-doctor-4212ganteng.firebaseapp.com",
  projectId: "my-doctor-4212",
  storageBucket: "my-doctor-4212.appspot.com",
  messagingSenderId: "4212222",
  appId: "1:4212ganteng"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
// exportt biar bisa di gunakan dimna aja
export default app;

```
