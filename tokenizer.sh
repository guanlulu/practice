#!/bin/bash

# create index
# curl -s -X PUT "localhost:9200/tokenizer"
# read file
cat ./txt/分词歧义表举例.txt | while read line
do
    # echo "${line}"
    OLD_IFS="$IFS"
    IFS=","
    arr=(${line})
    IFS="$OLD_IFS"
    for s in ${arr[@]}
    do
        # echo "$s"
        if [${!arr[*]} -eq "0"]
        then 
        echo ${!arr[*]}
        res=$(curl -s -X POST "localhost:9200/tokenizer/_analyze" -H 'Content-Type: application/json' -d'
            {
                "analyzer": "smartcn",
                "text": "'$s'"
            }
            ')
        echo ${res}
        fi
    done
done




# curl -s -X POST "localhost:9200/tokenizer/_analyze" -H 'Content-Type: application/json' -d'
# {
#     "analyzer": "smartcn",
#     "text": ""
# }
# '

