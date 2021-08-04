using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tntt_manegement.Models
{
    public class Semester
    {
        public int semesterId { get; set; }
        public DateTime startDay { get; set; }
        public DateTime endDay { get; set; }
        public string Note { get; set; }

        public SchoolYear SchoolYear { get; set; }
        public int schoolYearId { get; set; }











    }
}
