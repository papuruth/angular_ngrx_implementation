const job = require('../models/jobs')

exports.getJobs = async function (req, res) {
    const jobs = await job.find({}, function (err, data) {
        if (err) {
            console.log(err.message)
        }
    })

    const currentPage = Number(req.query.page);
    let totalPages = 0;
    if (jobs.length % 2 === 0) {
        totalPages = jobs.length / 4;
    } else {
        totalPages = Math.floor(jobs.length / 4) + 1
    }

    await job.find({}, (err, data) => {
        if (err) {
            console.log(err.message)
        } else {
            res.json({
                jobs: data,
                pager: {
                    totalItems: jobs.length,
                    totalPages: totalPages - 1,
                    currentPage: currentPage
                }
            })
        }
    })
        .limit(4)
        .skip(4 * currentPage)
}