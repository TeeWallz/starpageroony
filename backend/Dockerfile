FROM debian:buster-slim as builder

ARG VERSION

# Optional Cache buster
# ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache

# Build
WORKDIR /app

RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    ca-certificates=20200601~deb10u2 unzip && \
    rm -rf /var/lib/apt/lists/*

ADD https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_linux_amd64.zip /tmp/pocketbase_${VERSION}_linux_amd64.zip
RUN unzip -j /tmp/pocketbase_${VERSION}_linux_amd64.zip "pocketbase"

ADD https://github.com/benbjohnson/litestream/releases/download/v0.3.9/litestream-v0.3.9-linux-amd64.tar.gz /tmp/litestream.tar.gz
RUN tar -C /usr/local/bin -xzf /tmp/litestream.tar.gz


# Deploy
FROM debian:buster-slim
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    ca-certificates=20200601~deb10u2 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /app/pocketbase /app/pocketbase
COPY --from=builder /usr/local/bin/litestream /usr/local/bin/litestream
COPY litestream.yml /etc/litestream.yml

COPY run.sh .

EXPOSE 8090
# TODO add a health check to the API
HEALTHCHECK NONE

ENTRYPOINT ["/app/run.sh"]
