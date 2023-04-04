import { exec } from "node:child_process";
import { platform } from "node:process";
import path from "path";

export const runExec = () => {
	const projectName = path.basename(path.resolve(process.cwd()));

	if (platform == "win32") {
		try {
			const execFilePath = path.resolve(
				`./build/Debug/${projectName}.exe`
			);
			exec(`${execFilePath}`, (error, stdout, stderr) => {
				if (error) {
					console.log(`error: ${error.message}`);
					return;
				}
				if (stderr) {
					console.log(`stderr: ${stderr}`);
					return;
				}
				console.log(stdout);
			});
		} catch (err) {
			console.log(
				`error: make sure your cmake project name is the same as your baseDir (${projectName}`
			);
		}
	} else if (platform == "linux") {
		try {
			const execFilePath = path.resolve(`./build/${projectName}`);
			exec(`sh ${execFilePath}`, (error, stdout, stderr) => {
				if (error) {
					console.log(`error: ${error.message}`);
					return;
				}
				if (stderr) {
					console.log(`stderr: ${stderr}`);
					return;
				}
				console.log(stdout);
			});
		} catch (err) {
			console.log(
				`error: make sure your cmake project name is the same as your baseDir (${projectName}`
			);
		}
	} else {
		console.log(`${platform} is not supported yet.`);
	}
};

export const runBuild = () => {
	exec(
		"cmake -S . -B ./build && cd ./build && make",
		(error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			console.log(stdout);
		}
	);
};
