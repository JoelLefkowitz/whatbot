# Whatbot

A configurable Whatsapp chatbot

# Usage

```bash
docker run \
--mount type=bind,source=/root/keyfile.json,target=/whatbot/keyfile.json \
--mount type=bind,source=/root/whitelist.json,target=/whatbot/whitelist.json \
joellefkowitz/whatbot:0.3.0
```
