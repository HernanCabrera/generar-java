<template>
  <transition
    appear
    appear-to-class="animated swing"
    appear-active-class="animated swing">
    <div class="pt-5">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" class="py-0 px-1">
            <div class="contenedor-formulario p-4">
              <h1>Generador Java</h1>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="exampleInputGroup1"
                              label="Nombre del atributo: "
                              label-for="exampleInput1">
                  <b-form-input id="exampleInput1"
                                type="text"
                                v-model="form.atributo"
                                required
                                placeholder="Ingrese el nombre del atributo">
                  </b-form-input>
                </b-form-group>

                <b-form-group id="exampleInputGroup2"
                              label="Tipo de dato:"
                              label-for="exampleInput2">
                  <b-form-input id="exampleInput2"
                                type="text"
                                v-model="form.tipoDeDato"
                                required
                                placeholder="Ingrese el tipo de dato">
                  </b-form-input>
                </b-form-group>

                <b-form-group label="Set: ">
                  <b-form-radio-group id="radios-set" v-model="form.set" :options="accesos" name="radio-set">
                  </b-form-radio-group>
                </b-form-group>

                <b-form-group label="Get: ">
                  <b-form-radio-group id="radios-get" v-model="form.get" :options="accesos" name="radio-get">
                  </b-form-radio-group>
                </b-form-group>

                <b-button type="reset" variant="danger">Reiniciar</b-button>
                <b-button type="submit" variant="primary">Enviar</b-button>
              </b-form>
            </div>
          </b-col>
          <transition
            name="custom-classes-transition"
            enter-active-class="animated swing"
            leave-active-class="animated roollOut"
          >
            <b-col cols="12" lg="6" class="px-1 py-2 py-lg-0" v-if="arreglo.length > 0">
            <button class="btn-copiar" @click="copiarCodigo" variant="primary">Copiar codigo</button>
              <pre>
                <code>
          <span class="color-line cursor-pointer" @click="eliminarTodo()">/*                              
            TOCA ACA PARA                              
            BORRAR TODO                                
          */                              </span>

          <span class="color-line">// ELIMINA LOS ATRIBUTOS, SET Y GET al tocar en los atributos</span>
          <span class="color-line">// Atributos</span>
          <span class="cursor-pointer" v-for="(a, indice) in arreglo" :key="a" @click="eliminarDelArreglo(indice)"><span class="color-primary">private</span> <span class="color-tertiary">{{ a.tipoDeDato }}</span> {{ a.atributo }};                            
          </span>
          <span class="color-line">// Setters</span>
          <span class="setters" v-for="a in arreglo" :key="a"><span class="color-primary">{{ a.set }}</span> <span class="color-tertiary">void</span> <span class="color-secondary">set{{ a.atributo.charAt(0).toUpperCase() + a.atributo.substr(1) }}</span> (<span class="color-tertiary">{{a.tipoDeDato}}</span> <span class="color-quaternary">{{ a.atributo }}</span>) {
          <span class="color-quaternary line">    this</span>.{{ a.atributo }} = {{ a.atributo }};
          }
          </span>
          <span class="color-line">// Getters</span>
          <span class="getters" v-for="a in arreglo" :key="a"><span class="color-primary">{{ a.get }}</span> <span class="color-tertiary">{{ a.tipoDeDato }}</span> <span class="color-secondary">get{{ a.atributo.charAt(0).toUpperCase() + a.atributo.substr(1) }}</span> () {
          <span class="color-primary line">    return</span> <span class="color-quaternary">this</span>.{{ a.atributo }};
          }
          </span>
          <span class="color-line">/**                              
            * @author (Cabrera, Mauricio Hernan)                              
          <span v-for="redsocial in redesSociales" :key="redsocial">  * <a :href="redsocial.url" :target="redsocial.target">{{ redsocial.nombre }}</a>
          </span>*/</span>
                </code>
              </pre>
            </b-col>
          </transition>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      // form: {
      //   email: '',
      //   name: '',
      //   food: null,
      //   checked: []
      // },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true,

      form: {
        atributo: '',
        tipoDeDato: '',
        set: 'private',
        get: 'public'
      },
      accesos: ['public', 'private', 'protected'],
      arreglo: [],
      redesSociales: [
        {
          url: 'https://twitter.com/hernanmc06',
          nombre: 'twitter',
          target: '_blank'
        },
        {
          url: 'https://www.facebook.com/Hmc97',
          nombre: 'facebook',
          target: '_blank'
        },
        {
          url: 'https://www.instagram.com/hernanmauriciocabrera/',
          nombre: 'instagram',
          target: '_blank'
        },
        {
          url: 'https://github.com/HernanCabrera',
          nombre: 'github',
          target: '_blank'
        },
        {
          url: 'mailto:mauriciohernancabrera@gmail.com',
          nombre: 'gmail',
          target: '_blank'
        },
        {
          url: 'mailto:mauricioh_cabrera@hotmail.com',
          nombre: 'hotmail',
          target: '_blank'
        },
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.arreglo.push(Object.assign({}, this.form))
    },
    copiarCodigo () {
      const el = document.createElement('textarea')
      el.value = this.mostrarArreglo()
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      const selected = document.getSelection().rangeCount > 0? document.getSelection().getRangeAt(0) : false
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.atributo = ''
      this.form.tipoDeDato = ''
      this.form.set = 'private'
      this.form.get = 'public'
    },
    eliminarDelArreglo (indice) {
      this.arreglo.splice(indice, 1)
    },
    eliminarTodo () {
      this.arreglo = []
    },
    mostrarArreglo () {
      let string = ''

      this.arreglo.forEach((el, index) => {
          string += `    private ${el.tipoDeDato} ${el.atributo};
`
      })
      string += `
`

      this.arreglo.forEach(el => {
        string += `    ${el.set} void set${el.atributo.charAt(0).toUpperCase() + el.atributo.substr(1)} (${el.tipoDeDato} ${el.atributo}) {
        this.${el.atributo} = ${el.atributo};
    }
`
      })
      string += `
`


      this.arreglo.forEach(el => {
        string += `    ${el.get} get${el.atributo.charAt(0).toUpperCase() + el.atributo.substr(1)} ${el.atributo} () {
        return this.${el.atributo};
    }
`
      })
      return string
    }
  
  },
//   computed: {
//     mostrarArreglo () {
//       let string = ''

//       this.arreglo.forEach(el => {
//         string += `private ${el.tipoDeDato} ${el.atributo};
// `
//       })
//       string += `
// `

//       this.arreglo.forEach(el => {
//         string += `${el.set} void set${el.atributo.charAt(0).toUpperCase() + el.atributo.substr(1)} (${el.tipoDeDato} ${el.atributo}) {
//     this.${el.atributo} = ${el.atributo};
// }
// `
//       })
//       string += `
// `


//       this.arreglo.forEach(el => {
//         string += `${el.get} get${el.atributo.charAt(0).toUpperCase() + el.atributo.substr(1)} ${el.atributo} () {
//     return this.${el.atributo};
// }
// `
//       })
//       return string
//     }
//   }
}
</script>

<style>
body {
  overflow-x: hidden;
}
.btn-danger {
  background: #dddddd;
  border-color: #dddddd;
  outline: 0 !important;
}
.contenedor-formulario {
  border: 2px solid #dddddd;
}
.color-primary {
  color: #ea2647;  
}
.color-secondary {
  color: #98d52c;
}
.color-tertiary {
  color: #5dc5cc;
}
.color-quaternary {
  color: #e3871f;
}
.btn-copiar {
  border: 0;
  width: 100%;
  height: 40px;
  cursor: pointer;
  transition: .3s;
}
.btn-copiar:active {
  background: #272822;
  color: #e6e4c8;
}
.color-line {
  color: #464741;
}
.cursor-pointer {
  cursor: pointer;
}
.line {
  border-left: 2px solid #464741;
}
a {
  color: #464741;
}
a:hover {
  color: #464741;
}
p {
  margin: 0;
}
pre {
  background: #272822;
  color: #e6e4c8;
  padding: 0px;
  margin: 0;
  border-radius: 2px;
}
form {
  user-select: none;
}
</style>
