import * as esbuild from "esbuild";

const entryPointsArray = ["./bin/src/proman.js"];

await esbuild
	.build({
		entryPoints: entryPointsArray,
		bundle: true,
		minify: true,
		sourcemap: false,
		charset: "utf8",
		platform: "node",
		target: "esnext",
		outdir: "./bin/dist/",
		outExtension: { ".js": ".cjs" },
	})
	.then(() => console.log("⚡ build complete! ⚡"))
	.catch(() => process.exit(1));
