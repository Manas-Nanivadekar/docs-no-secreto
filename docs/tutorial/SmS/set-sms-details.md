---
sidebar_position: 1
---

# Set SMS Details

:::info

For sending SMS otp, currently **no-secreto** supports only **Twilio**. You need a twilio account to use this feature. You can sign up for a twilio account [here](https://www.twilio.com/).

:::

In this tutorial, we will learn how to set up SMS based passwordless authentication.
You need to provide your Twilio account details to use this feature. It is done in the following way:

```js
import { setSMSDetails } from "no-secreto";

const details = {
  accountSid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authToken: "your_auth_token",
  fromNumber: "+12345678901",
};
```

- AccountSid: Your Twilio account SID.
- AuthToken: Your Twilio auth token.
- FromNumber: Your Twilio phone number.
