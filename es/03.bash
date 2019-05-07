{
    "size": 0,
    "explain": false,
    "query": {
        "bool": {
            "must": [
                {
                    "term": {
                        "eCode": {
                            "value": "event1"
                        }
                    }
                }
            ],
            "filter": {
                "range": {
                    "@timestamp": {
                        "gte": "now-2d",
                        "lte": "now"
                    }
                }
            }
        }
    }
}

{ 
    "query": { 
        "bool": { 
            "should": [ 
                { 
                    "constant_score": { 
                        "filter": { 
                            "term": { 
                                "fifled":"value1" 
                            } 
                        },
                        "boost": 2 
                    } 
                },
                { 
                    "constant_score": { 
                        "filter": { 
                            "term": { 
                                "field": "value2"
                            } 
                        },
                        "boost": 5 
                    } 
                } 
            ] 
        } 
    } 
}