---
sidebar_position: 1
---

By default, the generated OTP is in the form of a string of alphabetical characters. This is the default behavior. If you want to generate a string of numbers & alphabet together, you can use the `alphanumeric` option.

```js
import { alphaNumericalOTP } from "os-passwordless";
const changeOption = alphaNumericalOTP();
```

this will generate a string of numbers & alphabet together for the purpose of OTP and return true.
