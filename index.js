var app = new Vue({
  el: '#app',
  data: {
    dat:0,
    aum:0,
    sig:'',
    Array:[],
    n1:'',
    n2:''
    },

  methods:{
    add(){
      this.Array.push(this.dat);
    },
    total(){
      switch (this.sig){
        case '+':
          this.n1=(parseInt(this.n1) + parseInt(this.n2));
          return this.n2='',this.n1, this.dat='',this.sig='';
          break;

        case '-':
          this.n1=(parseInt(this.n1) - parseInt(this.n2));
          return this.n2='',this.n1,this.dat='',this.sig='';
          break;

        case '*':
          this.n1=(parseInt(this.n1) * parseInt(this.n2));
          return this.n2='',this.n1, this.dat='',this.sig='';
          break;

        case '/':
          this.n1=(parseInt(this.n1) / parseInt(this.n2));
          return this.n2='',this.n1,this.dat='',this.sig=''
      }
    },
    clear(){
      return this.n1=0,this.n2='',this.dat='',this.sig='';
    }
  },
  computed:{
    calcular(){
      if(this.sig=="+"||this.sig=='-' || this.sig=='*' || this.sig=='/'){
        //clear to ArrA
        this.Array=[];
        //introducimos numeros para el segundo Array
        this.Array.push(this.dat)
        //recorremos Array
        for (numeros of this.Array){
            return parseInt(this.n2+=numeros);
          }
        this.dat=0;
        this.n2+=this.n2
        //else this.sig =='' then Array push it in n1
      }else if (this.sig==''){
        this.Array=[];
        this.Array.push(this.dat);
        for (numeros of this.Array){
          parseInt(this.n1+=numeros);
        }
        this.dat=0
        return parseInt(this.n1)
      }
      
      
    }
      
  }
})
