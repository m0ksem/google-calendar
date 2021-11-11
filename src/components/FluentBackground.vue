<template>
  <div class="fluent-background">
    <slot></slot>

    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
const vertexSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentSource = `precision highp float;
uniform float width;
uniform float height;
vec2 resolution = vec2(width, height);

uniform float time;

void main(){
	float strength = 0.4;
	float t = time/6.0;

	vec3 col = vec3(0);
	vec2 fC = gl_FragCoord.xy;

  //Normalized pixel coordinates (from 0 to 1)
  vec2 pos = fC/resolution.xy;

  pos.y /= resolution.x/resolution.y;
  pos = (pos) * 8.0;

  for(float k = 1.0; k < 7.0; k+=1.0) {
    pos.x += strength * sin(t + k * pos.y);
    pos.y += strength * cos(t + k * pos.x);
  }

  //Time varying pixel colour
  col = 0.5 + 0.5 * cos(vec3(pos.xy, 0.0));

	//Fragment colour
	gl_FragColor = vec4(col, 1.0) * vec4(0.9, 0.6, 0.9, 1.0);
}
`


export default {
  mounted() {
    const canvas = this.$refs.canvas

    this.applyWindowSizes(canvas)

    const ctx = canvas.getContext("webgl")

    if (!ctx) { throw new Error("Webgl is not supported") }

    // Define this.gl here
    this.gl = ctx

    //Create vertex and fragment shaders
    const vertexShader = this.compileShader(vertexSource, this.gl.VERTEX_SHADER);
    const fragmentShader = this.compileShader(fragmentSource, this.gl.FRAGMENT_SHADER);

    //Create shader program
    var program = this.gl.createProgram();
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    this.gl.useProgram(program);

    //Set up rectangle covering entire canvas 
    const vertexData = new Float32Array([
      -1.0,  1.0, 	// top left
      -1.0, -1.0, 	// bottom left
      1.0,  1.0, 	// top right
      1.0, -1.0, 	// bottom right
    ]);

    //Create vertex buffer
    const vertexDataBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexDataBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexData, this.gl.STATIC_DRAW);

    // Layout of our data in the vertex buffer
    const positionHandle = this.getAttribLocation(program, 'position');

    this.gl.enableVertexAttribArray(positionHandle);
    this.gl.vertexAttribPointer(positionHandle,
      2, 				// position is a vec2 (2 values per component)
      this.gl.FLOAT, // each component is a float
      false, 		// don't normalize values
      2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
      0 				// how many bytes inside the buffer to start from
      );

    //Set uniform handle
    var timeHandle = this.getUniformLocation(program, 'time');
    var widthHandle = this.getUniformLocation(program, 'width');
    var heightHandle = this.getUniformLocation(program, 'height');

    this.gl.uniform1f(widthHandle, window.innerWidth);
    this.gl.uniform1f(heightHandle, window.innerHeight);

    let lastFrame = new Date();
    let thisFrame;
    let time = 0;

    const draw = () => {
      thisFrame = Date.now();
      time += (thisFrame - lastFrame) / 3000;	
      lastFrame = thisFrame;

      this.gl.uniform1f(timeHandle, time);
      this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(draw);
    }

    draw()
  },

  methods: {
    applyWindowSizes(canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    },

    compileShader(shaderSource, shaderType) {
      var shader = this.gl.createShader(shaderType);
      this.gl.shaderSource(shader, shaderSource);
      this.gl.compileShader(shader);
      if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)){
        throw "Shader compile failed with: " + this.gl.getShaderInfoLog(shader);
      }
      return shader;
    },

    getAttribLocation(program, name) {
      const attributeLocation = this.gl.getAttribLocation(program, name);
      if (attributeLocation === -1) {
        throw 'Cannot find attribute ' + name + '.';
      }
      return attributeLocation;
    },

    getUniformLocation(program, name) {
      const attributeLocation = this.gl.getUniformLocation(program, name);
      if (attributeLocation === -1) {
        throw 'Cannot find uniform ' + name + '.';
      }
      return attributeLocation;
    }
  }
}
</script>

<style lang="scss" scoped>
.fluent-background {
  position: relative;
  width: 100%;
  height: 100%;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>