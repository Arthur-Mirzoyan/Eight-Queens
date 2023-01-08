using System;
using System.Diagnostics;

namespace EEIPQ
{
    class Program
    {
        static public bool HorizontalCheck(in byte[] arr)
        {
            for (int i = 1; i < 9; i++)
            {
                for (int j = i + 1; j < 9; j++)
                {
                    if (arr[i] == arr[j]) return false;
                }
            }

            return true;
        }

        static public bool DiagonalCheck(in byte[] arr)
        {
            for (int i = 1; i < 9; i++)
            {
                for (int j = i + 1; j < 9; j++)
                {
                    if (Math.Abs(arr[i] - arr[j]) == Math.Abs(j - i)) return false;
                }
            }

            return true;
        }

        static void Main(string[] args)
        {
            Stopwatch timer = new Stopwatch();
            timer.Start();

            byte x = 1;
            byte[] arr = new byte[9];

            for (byte a = 1; a < 9; a++)
            {
                arr[1] = a;
                for (byte b = 1; b < 9; b++)
                {
                    arr[2] = b;
                    for (byte c = 1; c < 9; c++)
                    {
                        arr[3] = c;
                        for (byte d = 1; d < 9; d++)
                        {
                            arr[4] = d;
                            for (byte e = 1; e < 9; e++)
                            {
                                arr[5] = e;
                                for (byte f = 1; f < 9; f++)
                                {
                                    arr[6] = f;
                                    for (byte g = 1; g < 9; g++)
                                    {
                                        arr[7] = g;
                                        for (byte h = 1; h < 9; h++)
                                        {
                                            arr[8] = h;
                                            if (HorizontalCheck(arr) && DiagonalCheck(arr))
                                            {
                                                arr[0] = x;
                                                Console.Write(arr[0] + "\t");
                                                for (byte m = 1; m < 9; m++) Console.Write(arr[m]);
                                                x++;
                                                Console.WriteLine("\n");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            timer.Stop();
            Console.WriteLine("Duration : " + timer.ElapsedMilliseconds + "ms");

            Console.ReadKey();
        }
    }
}
