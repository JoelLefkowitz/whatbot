# Autobots

```bash
docker pull joellefkowitz/autobots:0.1.0

docker run -it --mount \
type=bind,source=/root/keyfile.json,target=/autobots/keyfile.json \
joellefkowitz/autobots:0.1.0
```
