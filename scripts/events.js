// mac PanelЧ����������
var exec = require('child_process').exec;

// new ���Զ��򿪱༭��
hexo.on('new', function(data){
    exec('open -a MacDown ' + data.path);
});