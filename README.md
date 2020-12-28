# Autobots

```bash
docker run \
--mount type=bind,source=/root/keyfile.json,target=/autobots/keyfile.json \
--mount type=bind,source=/root/whitelist.json,target=/autobots/whitelist.json \
joellefkowitz/autobots:0.2.1
```
