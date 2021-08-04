using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tntt_manegement.Models
{
    public class Teacher
    {
        public int teacherId { get; set; }
        public string userName { get; set; }
        public string holyName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }

        public Group Group { get; set; }
        public Class Class { get; set; }

        public int groupId { get; set; }
        public int classId { get; set; }
    }
}
