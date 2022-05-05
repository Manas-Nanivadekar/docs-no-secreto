---
sidebar_position: 2
---

# Send OTP

Once you have set up SMS details, you can use it to send SMS otp.

```js
import { sendSMS } from "os-passwordless";

const sms = sendSMS("+XXXXXXXXXX");
```

This will send an SMS otp to the given phone number and return true if the SMS was sent successfully.
