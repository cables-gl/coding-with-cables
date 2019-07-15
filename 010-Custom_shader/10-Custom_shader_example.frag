uniform float uResX;
uniform float uResY;

uniform float uTime;
UNI sampler2D tex1;
IN vec2 texCoord;

{{MODULES_HEAD}}
void main()
{
    vec2 uv = gl_FragCoord.xy/vec2(uResX,uResY);
    //to get a texture
    //vec4 texIn = texture(tex1,texCoord);
    float animGreen = 0.5 + (0.5 * sin(uTime));
    
    vec4 col=vec4(uv,animGreen,1.0);
    
    {{MODULE_COLOR}}
    outColor = col;
}