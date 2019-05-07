// 模型的使用
// ------------------------
//  Data retrieval / Finders - 数据索引/查找
// 1. find - 从数据库中查找一个指定元素
// 按已知 id查找
Project.findById(123).then(function(project) {
    // project 是一个 Project 实例，且包含存储在数据中的数据
    // 当不存在 id 为123的记录时 project 为 null
})
// 按属性查找
Project.findOne({where: {title: 'aProject'}}).then(function(project) {
    // project 是匹配到的第一个 title 为 'aProject' 的 Projects 或 null
})
// 
Project.findOne({ 
    where: {title: 'aProject'},
    attributes: ['id',['name','title']] // ---------???
}).then(function(project) {
   // project 的 project.title 属性中会包含 'name'
})
// 2. findOrCreate - 从数据库中查找一个指定元素如果不存在则创建记录
// 3. findAndCountAll - 从数据库中查找多个元素，返回数据与记录总数
// 在返回值中，会包含以下两个属性：
// count - 整数，匹配到的总记录数
// rows - 对象数据，通过 limit 和 offset匹配的当前页数据
// $like
Project.findAndCountAll({
    where: {title: {$like: 'foo%'}},
    offset: 10,
    limit: 2
  })
  .then(function(result) {
    console.log(result.count);
    console.log(result.rows);
  });