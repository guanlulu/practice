1. 现在用的分词器是 ik 
2. ik 用的自定义词典是直接 copy 的 hanlp词典中的其中一个,路径： `/elasticsearch-6.4.1/plugins/analysis-hanlp/data/dictionary/CoreNatureDictionary.mini.txt`
3. ik 的自定义词典是没有词性以及权重的
4. 文件夹下的`user.utf8` 是自定义词典，要放在 `elasticsearch-6.4.1/config/analysis-ik`下，并且需要在 `lasticsearch-6.4.1/config/analysis-ik/IKAnalyzer.cfg.xml` 配置文件配置
    ```bash
    <!--用户可以在这里配置自己的扩展字典 -->
	<entry key="ext_dict">user.utf8</entry>
    ```
5. 文件夹下的停止词表`user_stop_word.utf8`、同义词表`user_synonyms.utf8`直接 copy 到`config` 目录下,停止词是之前我们整理过的，同义词还没有
6. 更换完词典需要重启 es
7. `my_test` 这个索引，存入了1000多条数据，包括租房、贷款、金融..., setting 和 mapping 在 kibana 或者 elasticsearch-head 上都可以看到，可以连接 es: `10.0.0.102:9200`，或者直接访问kibana: `10.0.0.102:5601`
8. 文件夹下的 js 文件是测试组合查询以及 ik 、ik_pinyin 的分词匹配结果，结果存在db里