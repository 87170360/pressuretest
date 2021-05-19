nohup ./pressuretest -log ./logs/ -td ./template -u ./userData -host :898 > pressuretest.nohup 2>&1 &
echo $! >./pressuretest.pid
