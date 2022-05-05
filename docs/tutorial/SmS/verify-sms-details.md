---
sidebar_position: 3
---

# Verify OTP

You can verify the OTP sent to your mobile number by using the following way:

```js
import { verifySMS } from "os-passwordless";

const verify = await verifySMS("+XXXXXXXXXX", "OTP");
```

This will return true if the OTP is valid.
