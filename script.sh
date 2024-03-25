echo '\n\n requesting all heroes'
curl localhost:3000/heroes

echo '\n\n requesting Neymar'
curl localhost:3000/heroes/1

echo '\n\n requesting invalid route'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}'\
    localhost:3000/heroes

