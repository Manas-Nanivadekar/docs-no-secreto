---
sidebar_position: 3
---

# Verify OTP

```javascript
import { verifyOTP } from "os-passwordless";

const verify = verifyOTP("users@emailId.com", "OtpEnteredByUser");
```

This function returns **user** if the OTP is valid and false if it is not.
