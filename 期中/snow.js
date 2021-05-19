//��ȡ��������
    var canvas = document.getElementById("canvas");
    //���û���Ϊ2D��ʽ
    var context = canvas.getContext("2d");
    //��ȡ��������ڵĿ�Ⱥ͸߶�
    var w = window.innerWidth;
    var h = window.innerHeight;
    //���û����Ŀ�Ⱥ͸߶�
    canvas.width = w;
    canvas.height = h;
    //����ѩƬ����
    var num = 400;
    //����ѩ������
    var snows = [];
    for (var i = 0; i < num; i++) {
        //���������Ԫ�أ�Ԫ�����������꼰�뾶����Ϊ������ɣ����а뾶����Ϊ5
        snows.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 5,
        });
    };
    //����ͼƬ
    function draw() {
        context.clearRect(0, 0, w, h); //��ջ���
        context.beginPath(); //���ʿ�ʼ
        for (var i = 0; i < num; i++) {
            var snow = snows[i];
            context.fillStyle = "rgba(255,255,255,0.5)"; //�趨��䷽ʽΪ��ɫ��͸��
            context.moveTo(snow.x, snow.y); //�����ƶ���ָ�����괦
            context.arc(snow.x, snow.y, snow.r, 0, Math.PI * 2); //�������Ի���Բ��
        }
        context.fill(); //���·��
        //ѩƬ����
        move();
    };
    function move() {
        for (var i = 0; i < num; i++) {
            var snow = snows[i];
            snow.y += (7 - snow.r) / 10 //����ѩƬ��С���������ٶ�
            if(snow.y > h){ //���ѩƬ����������Χ�����ڶ����ػ�
                snows[i]={x:Math.random() * w,y:0,r:snow.r}
            }
        }
    };
    //ִ�к͵��ú���
    draw();
    setInterval(draw, 1); //ÿ��һ�����ػ�һ��