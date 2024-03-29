const fs = require('fs')
const wipeDependencies = () => {
    const file = fs.readFileSync('package.json')
    const content = JSON.parse(file)
    for (var devDep in content.devDependencies) {
        if (!content.devDependencies[devDep].includes('git')) {
            content.devDependencies[devDep] = '*'
        }
    }
    for (var dep in content.dependencies) {
        if (!content.dependencies[dep].includes('git')) {
            content.dependencies[dep] = '*'
        }
    }
    fs.writeFileSync('package.json', JSON.stringify(content))
}
if (require.main === module) {
    wipeDependencies()
} else {
    module.exports = wipeDependencies
}
