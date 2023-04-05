#!/usr/bin/env node
"use strict";var he=Object.create;var G=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var ce=Object.getOwnPropertyNames;var pe=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var b=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var fe=(a,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ce(e))!me.call(a,n)&&n!==t&&G(a,n,{get:()=>e[n],enumerable:!(i=ue(e,n))||i.enumerable});return a};var k=(a,e,t)=>(t=a!=null?he(pe(a)):{},fe(e||!a||!a.__esModule?G(t,"default",{value:a,enumerable:!0}):t,a));var C=b(D=>{var E=class extends Error{constructor(e,t,i){super(i),Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name,this.code=t,this.exitCode=e,this.nestedError=void 0}},F=class extends E{constructor(e){super(1,"commander.invalidArgument",e),Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name}};D.CommanderError=E;D.InvalidArgumentError=F});var $=b(P=>{var{InvalidArgumentError:de}=C(),N=class{constructor(e,t){switch(this.description=t||"",this.variadic=!1,this.parseArg=void 0,this.defaultValue=void 0,this.defaultValueDescription=void 0,this.argChoices=void 0,e[0]){case"<":this.required=!0,this._name=e.slice(1,-1);break;case"[":this.required=!1,this._name=e.slice(1,-1);break;default:this.required=!0,this._name=e;break}this._name.length>3&&this._name.slice(-3)==="..."&&(this.variadic=!0,this._name=this._name.slice(0,-3))}name(){return this._name}_concatValue(e,t){return t===this.defaultValue||!Array.isArray(t)?[e]:t.concat(e)}default(e,t){return this.defaultValue=e,this.defaultValueDescription=t,this}argParser(e){return this.parseArg=e,this}choices(e){return this.argChoices=e.slice(),this.parseArg=(t,i)=>{if(!this.argChoices.includes(t))throw new de(`Allowed choices are ${this.argChoices.join(", ")}.`);return this.variadic?this._concatValue(t,i):t},this}argRequired(){return this.required=!0,this}argOptional(){return this.required=!1,this}};function ge(a){let e=a.name()+(a.variadic===!0?"...":"");return a.required?"<"+e+">":"["+e+"]"}P.Argument=N;P.humanReadableArgName=ge});var j=b(R=>{var{humanReadableArgName:_e}=$(),q=class{constructor(){this.helpWidth=void 0,this.sortSubcommands=!1,this.sortOptions=!1,this.showGlobalOptions=!1}visibleCommands(e){let t=e.commands.filter(i=>!i._hidden);if(e._hasImplicitHelpCommand()){let[,i,n]=e._helpCommandnameAndArgs.match(/([^ ]+) *(.*)/),s=e.createCommand(i).helpOption(!1);s.description(e._helpCommandDescription),n&&s.arguments(n),t.push(s)}return this.sortSubcommands&&t.sort((i,n)=>i.name().localeCompare(n.name())),t}compareOptions(e,t){let i=n=>n.short?n.short.replace(/^-/,""):n.long.replace(/^--/,"");return i(e).localeCompare(i(t))}visibleOptions(e){let t=e.options.filter(s=>!s.hidden),i=e._hasHelpOption&&e._helpShortFlag&&!e._findOption(e._helpShortFlag),n=e._hasHelpOption&&!e._findOption(e._helpLongFlag);if(i||n){let s;i?n?s=e.createOption(e._helpFlags,e._helpDescription):s=e.createOption(e._helpShortFlag,e._helpDescription):s=e.createOption(e._helpLongFlag,e._helpDescription),t.push(s)}return this.sortOptions&&t.sort(this.compareOptions),t}visibleGlobalOptions(e){if(!this.showGlobalOptions)return[];let t=[];for(let i=e.parent;i;i=i.parent){let n=i.options.filter(s=>!s.hidden);t.push(...n)}return this.sortOptions&&t.sort(this.compareOptions),t}visibleArguments(e){return e._argsDescription&&e._args.forEach(t=>{t.description=t.description||e._argsDescription[t.name()]||""}),e._args.find(t=>t.description)?e._args:[]}subcommandTerm(e){let t=e._args.map(i=>_e(i)).join(" ");return e._name+(e._aliases[0]?"|"+e._aliases[0]:"")+(e.options.length?" [options]":"")+(t?" "+t:"")}optionTerm(e){return e.flags}argumentTerm(e){return e.name()}longestSubcommandTermLength(e,t){return t.visibleCommands(e).reduce((i,n)=>Math.max(i,t.subcommandTerm(n).length),0)}longestOptionTermLength(e,t){return t.visibleOptions(e).reduce((i,n)=>Math.max(i,t.optionTerm(n).length),0)}longestGlobalOptionTermLength(e,t){return t.visibleGlobalOptions(e).reduce((i,n)=>Math.max(i,t.optionTerm(n).length),0)}longestArgumentTermLength(e,t){return t.visibleArguments(e).reduce((i,n)=>Math.max(i,t.argumentTerm(n).length),0)}commandUsage(e){let t=e._name;e._aliases[0]&&(t=t+"|"+e._aliases[0]);let i="";for(let n=e.parent;n;n=n.parent)i=n.name()+" "+i;return i+t+" "+e.usage()}commandDescription(e){return e.description()}subcommandDescription(e){return e.summary()||e.description()}optionDescription(e){let t=[];return e.argChoices&&t.push(`choices: ${e.argChoices.map(i=>JSON.stringify(i)).join(", ")}`),e.defaultValue!==void 0&&(e.required||e.optional||e.isBoolean()&&typeof e.defaultValue=="boolean")&&t.push(`default: ${e.defaultValueDescription||JSON.stringify(e.defaultValue)}`),e.presetArg!==void 0&&e.optional&&t.push(`preset: ${JSON.stringify(e.presetArg)}`),e.envVar!==void 0&&t.push(`env: ${e.envVar}`),t.length>0?`${e.description} (${t.join(", ")})`:e.description}argumentDescription(e){let t=[];if(e.argChoices&&t.push(`choices: ${e.argChoices.map(i=>JSON.stringify(i)).join(", ")}`),e.defaultValue!==void 0&&t.push(`default: ${e.defaultValueDescription||JSON.stringify(e.defaultValue)}`),t.length>0){let i=`(${t.join(", ")})`;return e.description?`${e.description} ${i}`:i}return e.description}formatHelp(e,t){let i=t.padWidth(e,t),n=t.helpWidth||80,s=2,r=2;function l(m,_){if(_){let H=`${m.padEnd(i+r)}${_}`;return t.wrap(H,n-s,i+r)}return m}function o(m){return m.join(`
`).replace(/^/gm," ".repeat(s))}let h=[`Usage: ${t.commandUsage(e)}`,""],u=t.commandDescription(e);u.length>0&&(h=h.concat([t.wrap(u,n,0),""]));let c=t.visibleArguments(e).map(m=>l(t.argumentTerm(m),t.argumentDescription(m)));c.length>0&&(h=h.concat(["Arguments:",o(c),""]));let f=t.visibleOptions(e).map(m=>l(t.optionTerm(m),t.optionDescription(m)));if(f.length>0&&(h=h.concat(["Options:",o(f),""])),this.showGlobalOptions){let m=t.visibleGlobalOptions(e).map(_=>l(t.optionTerm(_),t.optionDescription(_)));m.length>0&&(h=h.concat(["Global Options:",o(m),""]))}let O=t.visibleCommands(e).map(m=>l(t.subcommandTerm(m),t.subcommandDescription(m)));return O.length>0&&(h=h.concat(["Commands:",o(O),""])),h.join(`
`)}padWidth(e,t){return Math.max(t.longestOptionTermLength(e,t),t.longestGlobalOptionTermLength(e,t),t.longestSubcommandTermLength(e,t),t.longestArgumentTermLength(e,t))}wrap(e,t,i,n=40){let s=" \\f\\t\\v   -   　\uFEFF",r=new RegExp(`[\\n][${s}]+`);if(e.match(r))return e;let l=t-i;if(l<n)return e;let o=e.slice(0,i),h=e.slice(i).replace(`\r
`,`
`),u=" ".repeat(i),f="\\s​",O=new RegExp(`
|.{1,${l-1}}([${f}]|$)|[^${f}]+?([${f}]|$)`,"g"),m=h.match(O)||[];return o+m.map((_,H)=>_===`
`?"":(H>0?u:"")+_.trimEnd()).join(`
`)}};R.Help=q});var W=b(y=>{var{InvalidArgumentError:Oe}=C(),T=class{constructor(e,t){this.flags=e,this.description=t||"",this.required=e.includes("<"),this.optional=e.includes("["),this.variadic=/\w\.\.\.[>\]]$/.test(e),this.mandatory=!1;let i=B(e);this.short=i.shortFlag,this.long=i.longFlag,this.negate=!1,this.long&&(this.negate=this.long.startsWith("--no-")),this.defaultValue=void 0,this.defaultValueDescription=void 0,this.presetArg=void 0,this.envVar=void 0,this.parseArg=void 0,this.hidden=!1,this.argChoices=void 0,this.conflictsWith=[],this.implied=void 0}default(e,t){return this.defaultValue=e,this.defaultValueDescription=t,this}preset(e){return this.presetArg=e,this}conflicts(e){return this.conflictsWith=this.conflictsWith.concat(e),this}implies(e){return this.implied=Object.assign(this.implied||{},e),this}env(e){return this.envVar=e,this}argParser(e){return this.parseArg=e,this}makeOptionMandatory(e=!0){return this.mandatory=!!e,this}hideHelp(e=!0){return this.hidden=!!e,this}_concatValue(e,t){return t===this.defaultValue||!Array.isArray(t)?[e]:t.concat(e)}choices(e){return this.argChoices=e.slice(),this.parseArg=(t,i)=>{if(!this.argChoices.includes(t))throw new Oe(`Allowed choices are ${this.argChoices.join(", ")}.`);return this.variadic?this._concatValue(t,i):t},this}name(){return this.long?this.long.replace(/^--/,""):this.short.replace(/^-/,"")}attributeName(){return be(this.name().replace(/^no-/,""))}is(e){return this.short===e||this.long===e}isBoolean(){return!this.required&&!this.optional&&!this.negate}},I=class{constructor(e){this.positiveOptions=new Map,this.negativeOptions=new Map,this.dualOptions=new Set,e.forEach(t=>{t.negate?this.negativeOptions.set(t.attributeName(),t):this.positiveOptions.set(t.attributeName(),t)}),this.negativeOptions.forEach((t,i)=>{this.positiveOptions.has(i)&&this.dualOptions.add(i)})}valueFromOption(e,t){let i=t.attributeName();if(!this.dualOptions.has(i))return!0;let n=this.negativeOptions.get(i).presetArg,s=n!==void 0?n:!1;return t.negate===(s===e)}};function be(a){return a.split("-").reduce((e,t)=>e+t[0].toUpperCase()+t.slice(1))}function B(a){let e,t,i=a.split(/[ |,]+/);return i.length>1&&!/^[[<]/.test(i[1])&&(e=i.shift()),t=i.shift(),!e&&/^-[^-]$/.test(t)&&(e=t,t=void 0),{shortFlag:e,longFlag:t}}y.Option=T;y.splitOptionFlags=B;y.DualOptions=I});var K=b(J=>{function Ce(a,e){if(Math.abs(a.length-e.length)>3)return Math.max(a.length,e.length);let t=[];for(let i=0;i<=a.length;i++)t[i]=[i];for(let i=0;i<=e.length;i++)t[0][i]=i;for(let i=1;i<=e.length;i++)for(let n=1;n<=a.length;n++){let s=1;a[n-1]===e[i-1]?s=0:s=1,t[n][i]=Math.min(t[n-1][i]+1,t[n][i-1]+1,t[n-1][i-1]+s),n>1&&i>1&&a[n-1]===e[i-2]&&a[n-2]===e[i-1]&&(t[n][i]=Math.min(t[n][i],t[n-2][i-2]+1))}return t[a.length][e.length]}function Ae(a,e){if(!e||e.length===0)return"";e=Array.from(new Set(e));let t=a.startsWith("--");t&&(a=a.slice(2),e=e.map(r=>r.slice(2)));let i=[],n=3,s=.4;return e.forEach(r=>{if(r.length<=1)return;let l=Ce(a,r),o=Math.max(a.length,r.length);(o-l)/o>s&&(l<n?(n=l,i=[r]):l===n&&i.push(r))}),i.sort((r,l)=>r.localeCompare(l)),t&&(i=i.map(r=>`--${r}`)),i.length>1?`
(Did you mean one of ${i.join(", ")}?)`:i.length===1?`
(Did you mean ${i[0]}?)`:""}J.suggestSimilar=Ae});var ee=b(Z=>{var we=require("events").EventEmitter,M=require("child_process"),g=require("path"),L=require("fs"),p=require("process"),{Argument:xe,humanReadableArgName:Ee}=$(),{CommanderError:U}=C(),{Help:$e}=j(),{Option:z,splitOptionFlags:ye,DualOptions:Ve}=W(),{suggestSimilar:Y}=K(),w=class extends we{constructor(e){super(),this.commands=[],this.options=[],this.parent=null,this._allowUnknownOption=!1,this._allowExcessArguments=!0,this._args=[],this.args=[],this.rawArgs=[],this.processedArgs=[],this._scriptPath=null,this._name=e||"",this._optionValues={},this._optionValueSources={},this._storeOptionsAsProperties=!1,this._actionHandler=null,this._executableHandler=!1,this._executableFile=null,this._executableDir=null,this._defaultCommandName=null,this._exitCallback=null,this._aliases=[],this._combineFlagAndOptionalValue=!0,this._description="",this._summary="",this._argsDescription=void 0,this._enablePositionalOptions=!1,this._passThroughOptions=!1,this._lifeCycleHooks={},this._showHelpAfterError=!1,this._showSuggestionAfterError=!0,this._outputConfiguration={writeOut:t=>p.stdout.write(t),writeErr:t=>p.stderr.write(t),getOutHelpWidth:()=>p.stdout.isTTY?p.stdout.columns:void 0,getErrHelpWidth:()=>p.stderr.isTTY?p.stderr.columns:void 0,outputError:(t,i)=>i(t)},this._hidden=!1,this._hasHelpOption=!0,this._helpFlags="-h, --help",this._helpDescription="display help for command",this._helpShortFlag="-h",this._helpLongFlag="--help",this._addImplicitHelpCommand=void 0,this._helpCommandName="help",this._helpCommandnameAndArgs="help [command]",this._helpCommandDescription="display help for command",this._helpConfiguration={}}copyInheritedSettings(e){return this._outputConfiguration=e._outputConfiguration,this._hasHelpOption=e._hasHelpOption,this._helpFlags=e._helpFlags,this._helpDescription=e._helpDescription,this._helpShortFlag=e._helpShortFlag,this._helpLongFlag=e._helpLongFlag,this._helpCommandName=e._helpCommandName,this._helpCommandnameAndArgs=e._helpCommandnameAndArgs,this._helpCommandDescription=e._helpCommandDescription,this._helpConfiguration=e._helpConfiguration,this._exitCallback=e._exitCallback,this._storeOptionsAsProperties=e._storeOptionsAsProperties,this._combineFlagAndOptionalValue=e._combineFlagAndOptionalValue,this._allowExcessArguments=e._allowExcessArguments,this._enablePositionalOptions=e._enablePositionalOptions,this._showHelpAfterError=e._showHelpAfterError,this._showSuggestionAfterError=e._showSuggestionAfterError,this}command(e,t,i){let n=t,s=i;typeof n=="object"&&n!==null&&(s=n,n=null),s=s||{};let[,r,l]=e.match(/([^ ]+) *(.*)/),o=this.createCommand(r);return n&&(o.description(n),o._executableHandler=!0),s.isDefault&&(this._defaultCommandName=o._name),o._hidden=!!(s.noHelp||s.hidden),o._executableFile=s.executableFile||null,l&&o.arguments(l),this.commands.push(o),o.parent=this,o.copyInheritedSettings(this),n?this:o}createCommand(e){return new w(e)}createHelp(){return Object.assign(new $e,this.configureHelp())}configureHelp(e){return e===void 0?this._helpConfiguration:(this._helpConfiguration=e,this)}configureOutput(e){return e===void 0?this._outputConfiguration:(Object.assign(this._outputConfiguration,e),this)}showHelpAfterError(e=!0){return typeof e!="string"&&(e=!!e),this._showHelpAfterError=e,this}showSuggestionAfterError(e=!0){return this._showSuggestionAfterError=!!e,this}addCommand(e,t){if(!e._name)throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);return t=t||{},t.isDefault&&(this._defaultCommandName=e._name),(t.noHelp||t.hidden)&&(e._hidden=!0),this.commands.push(e),e.parent=this,this}createArgument(e,t){return new xe(e,t)}argument(e,t,i,n){let s=this.createArgument(e,t);return typeof i=="function"?s.default(n).argParser(i):s.default(i),this.addArgument(s),this}arguments(e){return e.split(/ +/).forEach(t=>{this.argument(t)}),this}addArgument(e){let t=this._args.slice(-1)[0];if(t&&t.variadic)throw new Error(`only the last argument can be variadic '${t.name()}'`);if(e.required&&e.defaultValue!==void 0&&e.parseArg===void 0)throw new Error(`a default value for a required argument is never used: '${e.name()}'`);return this._args.push(e),this}addHelpCommand(e,t){return e===!1?this._addImplicitHelpCommand=!1:(this._addImplicitHelpCommand=!0,typeof e=="string"&&(this._helpCommandName=e.split(" ")[0],this._helpCommandnameAndArgs=e),this._helpCommandDescription=t||this._helpCommandDescription),this}_hasImplicitHelpCommand(){return this._addImplicitHelpCommand===void 0?this.commands.length&&!this._actionHandler&&!this._findCommand("help"):this._addImplicitHelpCommand}hook(e,t){let i=["preSubcommand","preAction","postAction"];if(!i.includes(e))throw new Error(`Unexpected value for event passed to hook : '${e}'.
Expecting one of '${i.join("', '")}'`);return this._lifeCycleHooks[e]?this._lifeCycleHooks[e].push(t):this._lifeCycleHooks[e]=[t],this}exitOverride(e){return e?this._exitCallback=e:this._exitCallback=t=>{if(t.code!=="commander.executeSubCommandAsync")throw t},this}_exit(e,t,i){this._exitCallback&&this._exitCallback(new U(e,t,i)),p.exit(e)}action(e){let t=i=>{let n=this._args.length,s=i.slice(0,n);return this._storeOptionsAsProperties?s[n]=this:s[n]=this.opts(),s.push(this),e.apply(this,s)};return this._actionHandler=t,this}createOption(e,t){return new z(e,t)}addOption(e){let t=e.name(),i=e.attributeName();if(e.negate){let s=e.long.replace(/^--no-/,"--");this._findOption(s)||this.setOptionValueWithSource(i,e.defaultValue===void 0?!0:e.defaultValue,"default")}else e.defaultValue!==void 0&&this.setOptionValueWithSource(i,e.defaultValue,"default");this.options.push(e);let n=(s,r,l)=>{s==null&&e.presetArg!==void 0&&(s=e.presetArg);let o=this.getOptionValue(i);if(s!==null&&e.parseArg)try{s=e.parseArg(s,o)}catch(h){if(h.code==="commander.invalidArgument"){let u=`${r} ${h.message}`;this.error(u,{exitCode:h.exitCode,code:h.code})}throw h}else s!==null&&e.variadic&&(s=e._concatValue(s,o));s==null&&(e.negate?s=!1:e.isBoolean()||e.optional?s=!0:s=""),this.setOptionValueWithSource(i,s,l)};return this.on("option:"+t,s=>{let r=`error: option '${e.flags}' argument '${s}' is invalid.`;n(s,r,"cli")}),e.envVar&&this.on("optionEnv:"+t,s=>{let r=`error: option '${e.flags}' value '${s}' from env '${e.envVar}' is invalid.`;n(s,r,"env")}),this}_optionEx(e,t,i,n,s){if(typeof t=="object"&&t instanceof z)throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");let r=this.createOption(t,i);if(r.makeOptionMandatory(!!e.mandatory),typeof n=="function")r.default(s).argParser(n);else if(n instanceof RegExp){let l=n;n=(o,h)=>{let u=l.exec(o);return u?u[0]:h},r.default(s).argParser(n)}else r.default(n);return this.addOption(r)}option(e,t,i,n){return this._optionEx({},e,t,i,n)}requiredOption(e,t,i,n){return this._optionEx({mandatory:!0},e,t,i,n)}combineFlagAndOptionalValue(e=!0){return this._combineFlagAndOptionalValue=!!e,this}allowUnknownOption(e=!0){return this._allowUnknownOption=!!e,this}allowExcessArguments(e=!0){return this._allowExcessArguments=!!e,this}enablePositionalOptions(e=!0){return this._enablePositionalOptions=!!e,this}passThroughOptions(e=!0){if(this._passThroughOptions=!!e,this.parent&&e&&!this.parent._enablePositionalOptions)throw new Error("passThroughOptions can not be used without turning on enablePositionalOptions for parent command(s)");return this}storeOptionsAsProperties(e=!0){if(this._storeOptionsAsProperties=!!e,this.options.length)throw new Error("call .storeOptionsAsProperties() before adding options");return this}getOptionValue(e){return this._storeOptionsAsProperties?this[e]:this._optionValues[e]}setOptionValue(e,t){return this.setOptionValueWithSource(e,t,void 0)}setOptionValueWithSource(e,t,i){return this._storeOptionsAsProperties?this[e]=t:this._optionValues[e]=t,this._optionValueSources[e]=i,this}getOptionValueSource(e){return this._optionValueSources[e]}getOptionValueSourceWithGlobals(e){let t;return A(this).forEach(i=>{i.getOptionValueSource(e)!==void 0&&(t=i.getOptionValueSource(e))}),t}_prepareUserArgs(e,t){if(e!==void 0&&!Array.isArray(e))throw new Error("first parameter to parse must be array or undefined");t=t||{},e===void 0&&(e=p.argv,p.versions&&p.versions.electron&&(t.from="electron")),this.rawArgs=e.slice();let i;switch(t.from){case void 0:case"node":this._scriptPath=e[1],i=e.slice(2);break;case"electron":p.defaultApp?(this._scriptPath=e[1],i=e.slice(2)):i=e.slice(1);break;case"user":i=e.slice(0);break;default:throw new Error(`unexpected parse option { from: '${t.from}' }`)}return!this._name&&this._scriptPath&&this.nameFromFilename(this._scriptPath),this._name=this._name||"program",i}parse(e,t){let i=this._prepareUserArgs(e,t);return this._parseCommand([],i),this}async parseAsync(e,t){let i=this._prepareUserArgs(e,t);return await this._parseCommand([],i),this}_executeSubCommand(e,t){t=t.slice();let i=!1,n=[".js",".ts",".tsx",".mjs",".cjs"];function s(u,c){let f=g.resolve(u,c);if(L.existsSync(f))return f;if(n.includes(g.extname(c)))return;let O=n.find(m=>L.existsSync(`${f}${m}`));if(O)return`${f}${O}`}this._checkForMissingMandatoryOptions(),this._checkForConflictingOptions();let r=e._executableFile||`${this._name}-${e._name}`,l=this._executableDir||"";if(this._scriptPath){let u;try{u=L.realpathSync(this._scriptPath)}catch{u=this._scriptPath}l=g.resolve(g.dirname(u),l)}if(l){let u=s(l,r);if(!u&&!e._executableFile&&this._scriptPath){let c=g.basename(this._scriptPath,g.extname(this._scriptPath));c!==this._name&&(u=s(l,`${c}-${e._name}`))}r=u||r}i=n.includes(g.extname(r));let o;p.platform!=="win32"?i?(t.unshift(r),t=X(p.execArgv).concat(t),o=M.spawn(p.argv[0],t,{stdio:"inherit"})):o=M.spawn(r,t,{stdio:"inherit"}):(t.unshift(r),t=X(p.execArgv).concat(t),o=M.spawn(p.execPath,t,{stdio:"inherit"})),o.killed||["SIGUSR1","SIGUSR2","SIGTERM","SIGINT","SIGHUP"].forEach(c=>{p.on(c,()=>{o.killed===!1&&o.exitCode===null&&o.kill(c)})});let h=this._exitCallback;h?o.on("close",()=>{h(new U(p.exitCode||0,"commander.executeSubCommandAsync","(close)"))}):o.on("close",p.exit.bind(p)),o.on("error",u=>{if(u.code==="ENOENT"){let c=l?`searched for local subcommand relative to directory '${l}'`:"no directory for search for local subcommand, use .executableDir() to supply a custom directory",f=`'${r}' does not exist
 - if '${e._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${c}`;throw new Error(f)}else if(u.code==="EACCES")throw new Error(`'${r}' not executable`);if(!h)p.exit(1);else{let c=new U(1,"commander.executeSubCommandAsync","(error)");c.nestedError=u,h(c)}}),this.runningCommand=o}_dispatchSubcommand(e,t,i){let n=this._findCommand(e);n||this.help({error:!0});let s;return s=this._chainOrCallSubCommandHook(s,n,"preSubcommand"),s=this._chainOrCall(s,()=>{if(n._executableHandler)this._executeSubCommand(n,t.concat(i));else return n._parseCommand(t,i)}),s}_checkNumberOfArguments(){this._args.forEach((e,t)=>{e.required&&this.args[t]==null&&this.missingArgument(e.name())}),!(this._args.length>0&&this._args[this._args.length-1].variadic)&&this.args.length>this._args.length&&this._excessArguments(this.args)}_processArguments(){let e=(i,n,s)=>{let r=n;if(n!==null&&i.parseArg)try{r=i.parseArg(n,s)}catch(l){if(l.code==="commander.invalidArgument"){let o=`error: command-argument value '${n}' is invalid for argument '${i.name()}'. ${l.message}`;this.error(o,{exitCode:l.exitCode,code:l.code})}throw l}return r};this._checkNumberOfArguments();let t=[];this._args.forEach((i,n)=>{let s=i.defaultValue;i.variadic?n<this.args.length?(s=this.args.slice(n),i.parseArg&&(s=s.reduce((r,l)=>e(i,l,r),i.defaultValue))):s===void 0&&(s=[]):n<this.args.length&&(s=this.args[n],i.parseArg&&(s=e(i,s,i.defaultValue))),t[n]=s}),this.processedArgs=t}_chainOrCall(e,t){return e&&e.then&&typeof e.then=="function"?e.then(()=>t()):t()}_chainOrCallHooks(e,t){let i=e,n=[];return A(this).reverse().filter(s=>s._lifeCycleHooks[t]!==void 0).forEach(s=>{s._lifeCycleHooks[t].forEach(r=>{n.push({hookedCommand:s,callback:r})})}),t==="postAction"&&n.reverse(),n.forEach(s=>{i=this._chainOrCall(i,()=>s.callback(s.hookedCommand,this))}),i}_chainOrCallSubCommandHook(e,t,i){let n=e;return this._lifeCycleHooks[i]!==void 0&&this._lifeCycleHooks[i].forEach(s=>{n=this._chainOrCall(n,()=>s(this,t))}),n}_parseCommand(e,t){let i=this.parseOptions(t);if(this._parseOptionsEnv(),this._parseOptionsImplied(),e=e.concat(i.operands),t=i.unknown,this.args=e.concat(t),e&&this._findCommand(e[0]))return this._dispatchSubcommand(e[0],e.slice(1),t);if(this._hasImplicitHelpCommand()&&e[0]===this._helpCommandName)return e.length===1&&this.help(),this._dispatchSubcommand(e[1],[],[this._helpLongFlag]);if(this._defaultCommandName)return Q(this,t),this._dispatchSubcommand(this._defaultCommandName,e,t);this.commands.length&&this.args.length===0&&!this._actionHandler&&!this._defaultCommandName&&this.help({error:!0}),Q(this,i.unknown),this._checkForMissingMandatoryOptions(),this._checkForConflictingOptions();let n=()=>{i.unknown.length>0&&this.unknownOption(i.unknown[0])},s=`command:${this.name()}`;if(this._actionHandler){n(),this._processArguments();let r;return r=this._chainOrCallHooks(r,"preAction"),r=this._chainOrCall(r,()=>this._actionHandler(this.processedArgs)),this.parent&&(r=this._chainOrCall(r,()=>{this.parent.emit(s,e,t)})),r=this._chainOrCallHooks(r,"postAction"),r}if(this.parent&&this.parent.listenerCount(s))n(),this._processArguments(),this.parent.emit(s,e,t);else if(e.length){if(this._findCommand("*"))return this._dispatchSubcommand("*",e,t);this.listenerCount("command:*")?this.emit("command:*",e,t):this.commands.length?this.unknownCommand():(n(),this._processArguments())}else this.commands.length?(n(),this.help({error:!0})):(n(),this._processArguments())}_findCommand(e){if(e)return this.commands.find(t=>t._name===e||t._aliases.includes(e))}_findOption(e){return this.options.find(t=>t.is(e))}_checkForMissingMandatoryOptions(){for(let e=this;e;e=e.parent)e.options.forEach(t=>{t.mandatory&&e.getOptionValue(t.attributeName())===void 0&&e.missingMandatoryOptionValue(t)})}_checkForConflictingLocalOptions(){let e=this.options.filter(i=>{let n=i.attributeName();return this.getOptionValue(n)===void 0?!1:this.getOptionValueSource(n)!=="default"});e.filter(i=>i.conflictsWith.length>0).forEach(i=>{let n=e.find(s=>i.conflictsWith.includes(s.attributeName()));n&&this._conflictingOption(i,n)})}_checkForConflictingOptions(){for(let e=this;e;e=e.parent)e._checkForConflictingLocalOptions()}parseOptions(e){let t=[],i=[],n=t,s=e.slice();function r(o){return o.length>1&&o[0]==="-"}let l=null;for(;s.length;){let o=s.shift();if(o==="--"){n===i&&n.push(o),n.push(...s);break}if(l&&!r(o)){this.emit(`option:${l.name()}`,o);continue}if(l=null,r(o)){let h=this._findOption(o);if(h){if(h.required){let u=s.shift();u===void 0&&this.optionMissingArgument(h),this.emit(`option:${h.name()}`,u)}else if(h.optional){let u=null;s.length>0&&!r(s[0])&&(u=s.shift()),this.emit(`option:${h.name()}`,u)}else this.emit(`option:${h.name()}`);l=h.variadic?h:null;continue}}if(o.length>2&&o[0]==="-"&&o[1]!=="-"){let h=this._findOption(`-${o[1]}`);if(h){h.required||h.optional&&this._combineFlagAndOptionalValue?this.emit(`option:${h.name()}`,o.slice(2)):(this.emit(`option:${h.name()}`),s.unshift(`-${o.slice(2)}`));continue}}if(/^--[^=]+=/.test(o)){let h=o.indexOf("="),u=this._findOption(o.slice(0,h));if(u&&(u.required||u.optional)){this.emit(`option:${u.name()}`,o.slice(h+1));continue}}if(r(o)&&(n=i),(this._enablePositionalOptions||this._passThroughOptions)&&t.length===0&&i.length===0){if(this._findCommand(o)){t.push(o),s.length>0&&i.push(...s);break}else if(o===this._helpCommandName&&this._hasImplicitHelpCommand()){t.push(o),s.length>0&&t.push(...s);break}else if(this._defaultCommandName){i.push(o),s.length>0&&i.push(...s);break}}if(this._passThroughOptions){n.push(o),s.length>0&&n.push(...s);break}n.push(o)}return{operands:t,unknown:i}}opts(){if(this._storeOptionsAsProperties){let e={},t=this.options.length;for(let i=0;i<t;i++){let n=this.options[i].attributeName();e[n]=n===this._versionOptionName?this._version:this[n]}return e}return this._optionValues}optsWithGlobals(){return A(this).reduce((e,t)=>Object.assign(e,t.opts()),{})}error(e,t){this._outputConfiguration.outputError(`${e}
`,this._outputConfiguration.writeErr),typeof this._showHelpAfterError=="string"?this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`):this._showHelpAfterError&&(this._outputConfiguration.writeErr(`
`),this.outputHelp({error:!0}));let i=t||{},n=i.exitCode||1,s=i.code||"commander.error";this._exit(n,s,e)}_parseOptionsEnv(){this.options.forEach(e=>{if(e.envVar&&e.envVar in p.env){let t=e.attributeName();(this.getOptionValue(t)===void 0||["default","config","env"].includes(this.getOptionValueSource(t)))&&(e.required||e.optional?this.emit(`optionEnv:${e.name()}`,p.env[e.envVar]):this.emit(`optionEnv:${e.name()}`))}})}_parseOptionsImplied(){let e=new Ve(this.options),t=i=>this.getOptionValue(i)!==void 0&&!["default","implied"].includes(this.getOptionValueSource(i));this.options.filter(i=>i.implied!==void 0&&t(i.attributeName())&&e.valueFromOption(this.getOptionValue(i.attributeName()),i)).forEach(i=>{Object.keys(i.implied).filter(n=>!t(n)).forEach(n=>{this.setOptionValueWithSource(n,i.implied[n],"implied")})})}missingArgument(e){let t=`error: missing required argument '${e}'`;this.error(t,{code:"commander.missingArgument"})}optionMissingArgument(e){let t=`error: option '${e.flags}' argument missing`;this.error(t,{code:"commander.optionMissingArgument"})}missingMandatoryOptionValue(e){let t=`error: required option '${e.flags}' not specified`;this.error(t,{code:"commander.missingMandatoryOptionValue"})}_conflictingOption(e,t){let i=r=>{let l=r.attributeName(),o=this.getOptionValue(l),h=this.options.find(c=>c.negate&&l===c.attributeName()),u=this.options.find(c=>!c.negate&&l===c.attributeName());return h&&(h.presetArg===void 0&&o===!1||h.presetArg!==void 0&&o===h.presetArg)?h:u||r},n=r=>{let l=i(r),o=l.attributeName();return this.getOptionValueSource(o)==="env"?`environment variable '${l.envVar}'`:`option '${l.flags}'`},s=`error: ${n(e)} cannot be used with ${n(t)}`;this.error(s,{code:"commander.conflictingOption"})}unknownOption(e){if(this._allowUnknownOption)return;let t="";if(e.startsWith("--")&&this._showSuggestionAfterError){let n=[],s=this;do{let r=s.createHelp().visibleOptions(s).filter(l=>l.long).map(l=>l.long);n=n.concat(r),s=s.parent}while(s&&!s._enablePositionalOptions);t=Y(e,n)}let i=`error: unknown option '${e}'${t}`;this.error(i,{code:"commander.unknownOption"})}_excessArguments(e){if(this._allowExcessArguments)return;let t=this._args.length,i=t===1?"":"s",s=`error: too many arguments${this.parent?` for '${this.name()}'`:""}. Expected ${t} argument${i} but got ${e.length}.`;this.error(s,{code:"commander.excessArguments"})}unknownCommand(){let e=this.args[0],t="";if(this._showSuggestionAfterError){let n=[];this.createHelp().visibleCommands(this).forEach(s=>{n.push(s.name()),s.alias()&&n.push(s.alias())}),t=Y(e,n)}let i=`error: unknown command '${e}'${t}`;this.error(i,{code:"commander.unknownCommand"})}version(e,t,i){if(e===void 0)return this._version;this._version=e,t=t||"-V, --version",i=i||"output the version number";let n=this.createOption(t,i);return this._versionOptionName=n.attributeName(),this.options.push(n),this.on("option:"+n.name(),()=>{this._outputConfiguration.writeOut(`${e}
`),this._exit(0,"commander.version",e)}),this}description(e,t){return e===void 0&&t===void 0?this._description:(this._description=e,t&&(this._argsDescription=t),this)}summary(e){return e===void 0?this._summary:(this._summary=e,this)}alias(e){if(e===void 0)return this._aliases[0];let t=this;if(this.commands.length!==0&&this.commands[this.commands.length-1]._executableHandler&&(t=this.commands[this.commands.length-1]),e===t._name)throw new Error("Command alias can't be the same as its name");return t._aliases.push(e),this}aliases(e){return e===void 0?this._aliases:(e.forEach(t=>this.alias(t)),this)}usage(e){if(e===void 0){if(this._usage)return this._usage;let t=this._args.map(i=>Ee(i));return[].concat(this.options.length||this._hasHelpOption?"[options]":[],this.commands.length?"[command]":[],this._args.length?t:[]).join(" ")}return this._usage=e,this}name(e){return e===void 0?this._name:(this._name=e,this)}nameFromFilename(e){return this._name=g.basename(e,g.extname(e)),this}executableDir(e){return e===void 0?this._executableDir:(this._executableDir=e,this)}helpInformation(e){let t=this.createHelp();return t.helpWidth===void 0&&(t.helpWidth=e&&e.error?this._outputConfiguration.getErrHelpWidth():this._outputConfiguration.getOutHelpWidth()),t.formatHelp(this,t)}_getHelpContext(e){e=e||{};let t={error:!!e.error},i;return t.error?i=n=>this._outputConfiguration.writeErr(n):i=n=>this._outputConfiguration.writeOut(n),t.write=e.write||i,t.command=this,t}outputHelp(e){let t;typeof e=="function"&&(t=e,e=void 0);let i=this._getHelpContext(e);A(this).reverse().forEach(s=>s.emit("beforeAllHelp",i)),this.emit("beforeHelp",i);let n=this.helpInformation(i);if(t&&(n=t(n),typeof n!="string"&&!Buffer.isBuffer(n)))throw new Error("outputHelp callback must return a string or a Buffer");i.write(n),this.emit(this._helpLongFlag),this.emit("afterHelp",i),A(this).forEach(s=>s.emit("afterAllHelp",i))}helpOption(e,t){if(typeof e=="boolean")return this._hasHelpOption=e,this;this._helpFlags=e||this._helpFlags,this._helpDescription=t||this._helpDescription;let i=ye(this._helpFlags);return this._helpShortFlag=i.shortFlag,this._helpLongFlag=i.longFlag,this}help(e){this.outputHelp(e);let t=p.exitCode||0;t===0&&e&&typeof e!="function"&&e.error&&(t=1),this._exit(t,"commander.help","(outputHelp)")}addHelpText(e,t){let i=["beforeAll","before","after","afterAll"];if(!i.includes(e))throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${i.join("', '")}'`);let n=`${e}Help`;return this.on(n,s=>{let r;typeof t=="function"?r=t({error:s.error,command:s.command}):r=t,r&&s.write(`${r}
`)}),this}};function Q(a,e){a._hasHelpOption&&e.find(i=>i===a._helpLongFlag||i===a._helpShortFlag)&&(a.outputHelp(),a._exit(0,"commander.helpDisplayed","(outputHelp)"))}function X(a){return a.map(e=>{if(!e.startsWith("--inspect"))return e;let t,i="127.0.0.1",n="9229",s;return(s=e.match(/^(--inspect(-brk)?)$/))!==null?t=s[1]:(s=e.match(/^(--inspect(-brk|-port)?)=([^:]+)$/))!==null?(t=s[1],/^\d+$/.test(s[3])?n=s[3]:i=s[3]):(s=e.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/))!==null&&(t=s[1],i=s[3],n=s[4]),t&&n!=="0"?`${t}=${i}:${parseInt(n)+1}`:e})}function A(a){let e=[];for(let t=a;t;t=t.parent)e.push(t);return e}Z.Command=w});var se=b((d,ne)=>{var{Argument:ve}=$(),{Command:te}=ee(),{CommanderError:Se,InvalidArgumentError:ie}=C(),{Help:He}=j(),{Option:ke}=W();d=ne.exports=new te;d.program=d;d.Argument=ve;d.Command=te;d.CommanderError=Se;d.Help=He;d.InvalidArgumentError=ie;d.InvalidOptionArgumentError=ie;d.Option=ke});var re=k(se(),1),{program:V,createCommand:Ie,createArgument:We,createOption:Me,CommanderError:Le,InvalidArgumentError:Ue,InvalidOptionArgumentError:Ge,Command:Re,Argument:Be,Option:Je,Help:Ke}=re.default;var oe=k(require("fs"),1),S=require("node:child_process"),v=require("node:process"),x=k(require("path"),1),ae=async()=>{let a=x.default.resolve(process.cwd()),e=[];try{let t=await oe.default.readFileSync(x.default.resolve(`${a}/CMakeLists.txt`),"utf-8");if(t)t.split(`
`).map(async n=>{if(n.replaceAll("\r","").includes("project(")){let s=n.replaceAll("\r","").replaceAll("project(","").replaceAll(")","").split(" ");e.push(s[0])}});else{console.log("error: couldn't find CMakeLists.txt file.");return}}catch(t){console.log(`${t}`);return}if(!e||e.length!==1){console.log("error: couldn't find project name in CMakeLists.txt file.");return}if(v.platform=="win32")try{let t=x.default.resolve(`./build/Debug/${e[0]}.exe`);(0,S.exec)(`${t}`,(i,n,s)=>{if(i){console.log(`error: ${i.message}`);return}if(s){console.log(`stderr: ${s}`);return}console.log(n)})}catch{console.log(`error: make sure your cmake project name is the same as your baseDir (${e[0]}`)}else if(v.platform=="linux")try{let t=x.default.resolve(`./build/${e[0]}`);(0,S.exec)(`sh ${t}`,(i,n,s)=>{if(i){console.log(`error: ${i.message}`);return}if(s){console.log(`stderr: ${s}`);return}console.log(n)})}catch{console.log(`error: make sure your cmake project name is the same as your baseDir (${e[0]}`)}else console.log(`${v.platform} is not supported yet.`)},le=()=>{(0,S.exec)("cmake -S . -B ./build && cd ./build && make",(a,e,t)=>{if(a){console.log(`error: ${a.message}`);return}if(t){console.log(`stderr: ${t}`);return}console.log(e)})};V.command("exec").description("Run the project's debug executable").action(ae);V.command("build").description("Build the project binaries").action(le);V.parse();
