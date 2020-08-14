# mqtt-retained-topic-wiper

# 1. Install
Clone and install dependencies
```
git clone https://github.com/nielsfaber/mqtt-retained-topic-wiper.git
cd mqtt-retained-topic-wiper
npm install
```

# 2. Run
```
node app.js <my_root_topic>
```

# 3. Success

It will remove all retained topics in `<my_root_topic>/.....` (including `<my_root_topic>` itself).
