import fs from "fs";
import { exec } from "node:child_process";
import { platform } from "node:process";
import path from "path";

export const runExec = async () => {
	const projectPathName = path.resolve(process.cwd());
	const projectName: string[] | any[] = [];

	try {
		const CmakeFile = await fs.readFileSync(
			path.resolve(String(`${projectPathName}/CMakeLists.txt`)),
			"utf-8"
		);
		if (CmakeFile) {
			const projectCmakefileArray = CmakeFile.split("\n");
			projectCmakefileArray.map(async (line) => {
				if (line.replaceAll("\r", "").includes("project(")) {
					const projNameCleaned = line
						.replaceAll("\r", "")
						.replaceAll("project(", "")
						.replaceAll(")", "")
						.split(" ");
					projectName.push(projNameCleaned[0]);
				}
			});
		} else {
			console.log("error: couldn't find CMakeLists.txt file.");
			return;
		}
	} catch (err) {
		console.log(`${err}`);
		return;
	}

	if (!projectName || projectName.length !== 1) {
		console.log(
			"error: couldn't find project name in CMakeLists.txt file."
		);
		return;
	}

	if (platform == "win32") {
		try {
			const execFilePath = path.resolve(
				`./build/Debug/${projectName[0]}.exe`
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
				`error: make sure your cmake project name is the same as your baseDir (${projectName[0]}`
			);
		}
	} else if (platform == "linux") {
		try {
			const execFilePath = path.resolve(`./build/${projectName[0]}`);
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
				`error: make sure your cmake project name is the same as your baseDir (${projectName[0]}`
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
