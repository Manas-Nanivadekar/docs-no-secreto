---
sidebar_position: 2
---

# Send OTP

To send the OTP to the user, use the following method:

```javascript
import { sendEmail } from "os-passwordless";

const sendEmailToUser = sendEmail("users@emailId.com");
```

The function returns true and logs nodemailer response if the email is sent successfully.

## Turn off console logging

```js
import { turnOffEmailConsole } from "os-passwordless";

turnOffEmailConsole();
```
