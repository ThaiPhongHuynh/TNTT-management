using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tntt_manegement.Models
{
    public class SchoolYear
    {
        public int schoolYearId { get; set; }
        public string schoolYearName { get; set; }
        public DateTime startDay { get; set; }
        public DateTime endDay { get; set; }
        public string Note { get; set; }

        public List<Semester> Semesters { get; set; }


    }
}
